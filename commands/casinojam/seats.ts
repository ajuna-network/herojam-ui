import type { Command, CommandContext } from "@/types/command";
import { isCasinoJamApi } from "./util";

export const seats: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!selectedAccount || !activeSigner) return "No selected account";

    // Validate and normalize first argument
    const validArgs = ["me", "all"];
    const targetArg = args[0]?.toLowerCase() ?? "all";

    if (!validArgs.includes(targetArg))
      return `Invalid argument. Use 'seats me' or 'seats all'`;

    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
    const seats = casinoJamAssets.filter(
      ({ value: [, asset] }) => asset.variant.type === "Seat"
    );

    const seatIds = seats.map(({ value: [, asset] }) => asset.id);

    if (targetArg === "me") {
      return (
        seats
          .find(({ value: [owner] }) => owner === selectedAccount.address)
          ?.value[1].id.toString() ?? "No seat found for this account"
      );
    } else if (targetArg === "all") {
      const formattedSeatIds = seatIds.map((id) => {
        const isMe = seats.find(
          ({ value: [owner, asset] }) =>
            asset.id === id && owner === selectedAccount.address
        );
        return isMe ? `${id}(me)` : id;
      });
      return formattedSeatIds.join(", ");
    }

    return "Invalid argument. Use 'seats me' or 'seats all'";
  },
  help: {
    command: "seats <me|all>",
    description: "Display your seat id or all seat ids",
  },
};
