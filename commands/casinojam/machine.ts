import type { Command, CommandContext } from "@/types/command";
import { displayMachineEntry, isCasinoJamApi } from "./util";

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

    const assetFundsEntries =
      await api.query.CasinoJamSage.AssetFunds.getEntries(machine.value[1].id);

    const machineSeats = casinoJamAssets.filter(
      ({ value: [, asset] }) =>
        asset.variant.type === "Seat" &&
        asset.variant.value.machine_id === machine.value[1].id
    );

    return displayMachineEntry({
      machine: machine.value,
      funds: assetFundsEntries?.[0]?.value ?? 0n,
      seats: machineSeats.map(({ value: [, asset] }) => asset.id),
    });
  },
  help: {
    command: "machine [machine_id]",
    description: "Display machine info",
  },
};
