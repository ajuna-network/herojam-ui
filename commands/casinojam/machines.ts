import { Command } from "@/types/command";
import { isCasinoJamApi } from "./util";
import { machine } from "./machine";

/**
 * Get all assets of AssetType.Machine
 */
export const machines: Command = {
  execute: async (args: string[], { activeSigner, selectedAccount, api }) => {
    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    if (args.length === 0) {
      // use the machine command to display all machines
      return machine.execute(args, { activeSigner, selectedAccount, api });
    } else if (args.length === 1 && args[0] === "my") {
      const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();

      const machines = casinoJamAssets.filter(
        ({ value: [owner, asset] }) =>
          asset.variant.type === "Machine" && owner === selectedAccount.address
      );

      console.log("my machines", machines);

      return "not implemented";
    }

    return "Invalid command. Use 'machines' to display all machines or 'machines my' to display your machines";
  },
  help: "<span class='text-blue-500'>machines</span> - Display all machines or take action on a machine",
};
