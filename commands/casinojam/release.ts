import type { Command, CommandContext } from "@/types/command";
import {
  formatTransitionError,
  isCasinoJamApi,
  validateMultiplierType,
} from "./util";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";

export const DEFAULT_MULTIPLIER = "V1";

export const release: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    if (args.length > 0) {
      return "Error: The syntax is 'release'";
    }

    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();

    // does the player exist?
    const playerMeId = casinoJamAssets.find(
      ({ value: [owner, asset] }) =>
        asset.variant.type === "Player" &&
        asset.variant.value.type === "Human" &&
        owner === selectedAccount.address
    )?.value[1].id;

    if (!playerMeId) {
      return "Error: Player not found";
    }

    const occupiedSeat = casinoJamAssets.find(
      ({ value: [, asset] }) =>
        asset.variant.type === "Seat" &&
        asset.variant.value.player_id === playerMeId
    );

    if (!occupiedSeat) {
      return "Error: Seat not found";
    }

    const seatToReleaseId = occupiedSeat.value[1].id;

    if (!seatToReleaseId) {
      return "Error: Seat not found";
    }

    console.info(`releasing seat ${seatToReleaseId} for player ${playerMeId}`);

    const tx = await api.tx.CasinoJamSage.state_transition({
      transition_id: {
        type: "Release",
        value: undefined,
      },
      asset_ids: [playerMeId, seatToReleaseId],
      payment_kind: undefined,
    });

    const result = await tx.signAndSubmit(activeSigner, { at: "best" });
    console.info("result release", result);

    if (result.ok) {
      return `✅ Seat ${seatToReleaseId} released for player ${playerMeId}`;
    } else {
      const err = result.dispatchError.value as CasinojamDispatchError;
      return formatTransitionError(err);
    }
  },
  help: {
    command: "release",
    description: "Release your occupied seat",
  },
};
