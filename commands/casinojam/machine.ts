import type { Command, CommandContext } from "@/types/command";
import { displayAsset, isCasinoJamApi } from "./util";

export const machine: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!selectedAccount || !activeSigner) return "No selected account";

    if (args.length !== 1) {
      return "Error: The syntax is 'machine [machine_id]'";
    }

    const machineIdArg = args[0];

    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
    const machine = casinoJamAssets.find(
      ({ value: [, asset] }) =>
        asset.variant.type === "Machine" && asset.id === parseInt(machineIdArg)
    );

    if (!machine) {
      return "Error: Machine not found";
    }

    return displayAsset(machine.value);
  },
  help: {
    command: "machine <machine_id>",
    description: "Display machine info",
  },
};
