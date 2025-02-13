import { Command } from "@/types/command";
import {
  displayPlayer,
  formatTransitionError,
  isCasinoJamApi,
  TOKEN_TYPE_VALUES,
} from "./util";
import { Enum } from "polkadot-api";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";
import { PlayerUI, TokenType, TokenValuesType } from "./types";

const subCommands = `<span class="text-blue-500">player create</span> - create a new player
<span class="text-blue-500">player me</span> - display your player
<span class="text-blue-500">player [id]</span> - display a player
<span class="text-blue-500">player [id] deposit [token_type]</span> - deposit a token`;

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
      if (!isNaN(Number(args[0])) || args[0] === "me") {
        // COMMAND: player [id] / player me
        let player;

        if (args[0] === "me") {
          player = uiPlayers.find(
            (player) => player.owner === selectedAccount.address
          );
        } else {
          player = uiPlayers.find((player) => player.id === parseInt(args[0]));
        }

        if (player) {
          const assetFundsEntries =
            await api.query.CasinoJamSage.AssetFunds.getEntries(player.id);

          return displayPlayer({
            ...player,
            funds: assetFundsEntries?.[0]?.value ?? 0,
          });
        }

        return "Player not found";
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
    } else if (args.length > 1) {
      // COMMAND: machine [id] [action] [args]
      const playerId = args[0];
      const action = args[1];
      const subCommandArgs = args.slice(2);

      const player = uiPlayers.find(
        (player) => player.id === parseInt(playerId)
      );

      if (!player) {
        return "Player not found";
      }

      if (action === "deposit") {
        // COMMAND: player [id] deposit [token_type]
        if (subCommandArgs.length !== 1) {
          return "Invalid command. Use 'player [id] deposit [token_type]' to deposit a token";
        }

        const tokenTypeArg = subCommandArgs[0];
        if (!TOKEN_TYPE_VALUES.includes(tokenTypeArg as TokenValuesType)) {
          return `Invalid token type. Valid values are: ${TOKEN_TYPE_VALUES.join(
            ", "
          )}`;
        }

        const tokenType: TokenType = Enum(tokenTypeArg as TokenValuesType);
        const tx = await api.tx.CasinoJamSage.state_transition({
          transition_id: {
            type: "Deposit",
            value: [Enum("Player"), tokenType],
          },
          asset_ids: [player.id],
          payment_kind: undefined,
        });

        const result = await tx.signAndSubmit(activeSigner, { at: "best" });
        console.info("result machine deposit", result);

        if (result.ok) {
          return "✅ Player funded";
        } else {
          const err = result.dispatchError.value as CasinojamDispatchError;
          return formatTransitionError(err);
        }
      }

      return "command not implemented";
    } else {
      return `
available players
-----------------
${uiPlayers.map((player) => player.id).join(", ")}

available player actions
------------------------
${subCommands}`;
    }
  },
  help:
    "<span class='text-blue-500'>player</span> - Display a player or take action on a player\n" +
    subCommands,
};
