import type { Command, CommandContext } from "@/types/command";
import { isCasinoJamApi } from "./util";

export const machines: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!selectedAccount || !activeSigner) return "No selected account";

    // Validate and normalize first argument
    const validArgs = ["me", "all"];
    const targetArg = args[0]?.toLowerCase() ?? "all";

    if (!validArgs.includes(targetArg))
      return `Invalid argument. Use 'machines me' or 'machines all'`;

    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
    const machines = casinoJamAssets.filter(
      ({ value: [, asset] }) => asset.variant.type === "Machine"
    );

    const machineIds = machines.map(({ value: [, asset] }) => asset.id);

    if (targetArg === "me") {
      return (
        machines
          .find(({ value: [owner] }) => owner === selectedAccount.address)
          ?.value[1].id.toString() ?? "No machine found for this account"
      );
    } else if (targetArg === "all") {
      const formattedMachineIds = machineIds.map((id) => {
        const isMe = machines.find(
          ({ value: [owner, asset] }) =>
            asset.id === id && owner === selectedAccount.address
        );
        return isMe ? `${id}(me)` : id;
      });
      return formattedMachineIds.join(", ");
    }

    return "Invalid argument. Use 'machines me' or 'machines all'";
  },
  help: {
    command: "machines <me|all>",
    description: "Display your machine id or all machine ids",
  },
};
