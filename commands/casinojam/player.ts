import { Command } from "@/types/command";
import { displayObject, isCasinoJamApi } from "./util";

/**
 * Get all assets of AssetType.Hero
 */
export const player: Command = {
  execute: async (args: string[], { activeSigner, selectedAccount, api }) => {
    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!selectedAccount || !activeSigner) return "No selected account";

    if (args.length !== 1) {
      return "Error: The syntax is 'player [player_id]'";
    }

    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();

    const players = casinoJamAssets.filter(
      ({ value: [, asset] }) =>
        asset.variant.type === "Player" && asset.variant.value.type === "Human"
    );

    const trackerMe = casinoJamAssets.filter(
      ({ value: [owner, asset] }) =>
        asset.variant.type === "Player" &&
        asset.variant.value.type === "Tracker" &&
        owner === selectedAccount.address
    );

    let player;

    if (args[0] === "me") {
      player = players.find(
        ({ value: [owner] }) => owner === selectedAccount.address
      );
    } else {
      player = players.find(
        ({ value: [, asset] }) => asset.id === parseInt(args[0])
      );
    }

    if (player) {
      const assetFundsEntries =
        await api.query.CasinoJamSage.AssetFunds.getEntries(player.value[1].id);

      const playerSeat = casinoJamAssets.filter((entry) => {
        const [, assetData] = entry.value;
        return (
          assetData.variant.type === "Seat" &&
          assetData.variant.value.player_id === player.value[1].id
        );
      });

      const playerMachines = casinoJamAssets.filter(
        ({ value: [owner, asset] }) =>
          asset.variant.type === "Machine" && owner === selectedAccount.address
      );

      return displayObject({
        ...player.value[1],
        funds: assetFundsEntries?.[0]?.value.toString() ?? 0,
        seat: playerSeat?.[0]?.value?.[1]?.id,
        machines: playerMachines.map(({ value: [, asset] }) => asset.id),
        tracker: trackerMe?.[0]?.value?.[1]?.id,
      });
    }

    return "Player not found";
  },
  help: {
    command: "player",
    description: "display a player or take action on a player",
  },
};
