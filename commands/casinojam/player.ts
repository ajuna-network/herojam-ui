import { Command } from "@/types/command";
import { displayPlayer, formatTransitionError, isCasinoJamApi } from "./util";
import { Enum } from "polkadot-api";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";
import { PlayerUI } from "./types";

/**
 * Get all assets of AssetType.Hero
 */
export const player: Command = {
  execute: async (args: string[], { activeSigner, selectedAccount, api }) => {
    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();

    console.info("raw assets", casinoJamAssets);

    const players = casinoJamAssets.filter(
      ({ value: [, asset] }) =>
        asset.variant.type === "Player" && asset.variant.value.type === "Human"
    );

    const trackers = casinoJamAssets.filter(
      ({ value: [, asset] }) =>
        asset.variant.type === "Player" &&
        asset.variant.value.type === "Tracker"
    );

    const uiPlayers: PlayerUI[] = players.map(
      ({ value: [playerOwner, playerAsset] }) => {
        const tracker = trackers.find(
          ({ value: [trackerOwner] }) => trackerOwner === playerOwner
        )?.value[1].id;

        console.info("tracker", tracker);

        return {
          id: playerAsset.id,
          genesis: playerAsset.genesis,
          owner: playerOwner,
          tracker,
        };
      }
    );

    console.info("uiPlayers", uiPlayers);

    if (args.length === 1) {
      if (!isNaN(Number(args[0]))) {
        // COMMAND: player [id]
        const playerId = args[0];
        const player = uiPlayers.find(
          (player) => player.id === parseInt(playerId)
        );
        return player ? displayPlayer(player) : "Player not found";
      } else if (args[0] === "me") {
        // COMMAND: player me
        const mePlayer = uiPlayers.find(
          (player) => player.owner === selectedAccount.address
        );
        return mePlayer ? displayPlayer(mePlayer) : "You are not a player";
      } else if (args[0] === "create") {
        // COMMAND: player create
        const tx = await api.tx.CasinoJamSage.state_transition({
          transition_id: { type: "Create", value: Enum("Player") },
          asset_ids: [],
          payment_kind: undefined,
        });

        const result = await tx.signAndSubmit(activeSigner, { at: "best" });
        console.info("result player create", result);

        if (result.ok) {
          return "✅ Player created";
        } else {
          const err = result.dispatchError.value as CasinojamDispatchError;
          return formatTransitionError(err);
        }
      }

      return "Invalid command. Use 'player [id]' to view a player or 'player create' to create a new player";
    } else if (args.length === 2) {
      return "not yet implemented";
    } else {
      return `available players:
${uiPlayers.map((player) => player.id).join(", ")}

available actions:
<span class="text-blue-500">player create</span> - create a new player
<span class="text-blue-500">player me</span> - display your player
<span class="text-blue-500">player [id]</span> - display a player`;
    }
  },
  help: "player - Display a player or take action on a player",
};
