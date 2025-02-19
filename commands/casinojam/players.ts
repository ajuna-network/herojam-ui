import type { Command, CommandContext } from "@/types/command";
import { isCasinoJamApi } from "./util";

export const players: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!selectedAccount || !activeSigner) return "No selected account";

    // Validate and normalize first argument
    const validArgs = ["me", "all"];
    const targetArg = args[0]?.toLowerCase() ?? "all";

    if (!validArgs.includes(targetArg))
      return `Invalid argument. Use 'players me' or 'players all'`;

    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
    const players = casinoJamAssets.filter(
      ({ value: [, asset] }) =>
        asset.variant.type === "Player" && asset.variant.value.type === "Human"
    );

    const playerIds = players.map(({ value: [, asset] }) => asset.id);

    if (targetArg === "me") {
      return (
        players
          .find(({ value: [owner] }) => owner === selectedAccount.address)
          ?.value[1].id.toString() ?? "No player found for this account"
      );
    } else if (targetArg === "all") {
      const formattedPlayerIds = playerIds.map((id) => {
        const isMe = players.find(
          ({ value: [owner, asset] }) =>
            asset.id === id && owner === selectedAccount.address
        );
        return isMe ? `${id}(me)` : id;
      });
      return formattedPlayerIds.join(", ");
    }

    return "Invalid argument. Use 'players me' or 'players all'";
  },
  help: {
    command: "players [me|all]",
    description: "Display your player id or all player ids",
  },
};
