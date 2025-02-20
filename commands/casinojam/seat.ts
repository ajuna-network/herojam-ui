import type { Command, CommandContext } from "@/types/command";
import { displayAsset, isCasinoJamApi } from "./util";

export const seat: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!selectedAccount || !activeSigner) return "No selected account";

    // Validate and normalize first argument
    if (args.length !== 1) {
      return "Error: The syntax is 'seat [seat_id]'";
    }

    const seatIdArg = args[0];

    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
    const seat = casinoJamAssets.find(
      ({ value: [, asset] }) =>
        asset.variant.type === "Seat" && asset.id === parseInt(seatIdArg)
    );

    if (!seat) {
      return "Error: Seat not found";
    }

    return displayAsset(seat.value);
  },
  help: {
    command: "seat [seat_id]",
    description: "Display seat info",
  },
};
