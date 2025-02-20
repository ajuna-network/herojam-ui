import { Command } from "@/types/command";
import {
  isCasinoJamApi,
  formatTransitionError,
  validateMultiplierType,
  unpackSlotResult,
  displaySlotMachine,
} from "./util";
import { PlayerTrackerType, SeatType } from "./types";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";
import { gambleInfo } from "./gamble-info";
import { animateSpinning } from "@/lib/animate-spinning";

export const gamble: Command = {
  execute: async (
    args: string[],
    { onProcessing, api, activeSigner, selectedAccount, client }
  ) => {
    if (!onProcessing) return "Error: Processing callback not available";

    if (args[0] === "info") {
      return gambleInfo.execute(args, {
        onProcessing,
        api,
        activeSigner,
        selectedAccount,
      });
    }

    if (!api || !isCasinoJamApi(api))
      return "Error: API or client not available";

    if (!activeSigner || !selectedAccount)
      return "Please connect and select an account first";

    if (args.length === 1) {
      // COMMAND: gamble
      const chainInfo = await client?.getChainSpecData();

      const multiplierArg = args[0].toUpperCase();
      const multiplier = validateMultiplierType(multiplierArg);

      // retrieve all required assets for the gamble extrinsic:
      // player, tracker, seat, machine
      const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
      const players = casinoJamAssets.filter(
        ({ value: [, asset] }) =>
          asset.variant.type === "Player" &&
          asset.variant.value.type === "Human"
      );
      const me = players.find(
        ({ value: [owner] }) => owner === selectedAccount.address
      );

      if (!me) return "You are not a player";

      const playerId = me?.value[1].id;
      const meTrackerId = casinoJamAssets.filter(
        ({ value: [owner, asset] }) =>
          asset.variant.type === "Player" &&
          asset.variant.value.type === "Tracker" &&
          owner === selectedAccount.address
      )?.[0]?.value[1].id;

      const currentSeat = casinoJamAssets.find(
        ({ value: [, asset] }) =>
          asset.variant.type === "Seat" &&
          asset.variant.value.player_id === me?.value[1].id
      );

      if (!currentSeat) return "You are not in a seat";

      const currentSeatId = currentSeat?.value[1].id;
      const currentMachineId = (currentSeat?.value[1].variant.value as SeatType)
        .machine_id;

      if (!currentSeatId || !currentMachineId)
        return "You are not in a seat or machine";

      if (!meTrackerId) return "You dont have a tracker";

      // craft the gamble params
      const tx = api.tx.CasinoJamSage.state_transition({
        transition_id: { type: "Gamble", value: multiplier },
        asset_ids: [playerId, meTrackerId, currentSeatId, currentMachineId],
        payment_kind: undefined,
      });

      const multiplierDisplay = `${multiplierArg
        .toUpperCase()
        .replace("V", "")}x`;

      const stopSignal = { shouldStop: false };
      const animationPromise = animateSpinning(
        onProcessing,
        stopSignal,
        multiplierDisplay
      );

      const result = await tx.signAndSubmit(activeSigner);
      stopSignal.shouldStop = true;
      await animationPromise;

      console.info("result gamble", result);

      if (result.ok) {
        // get the results from the tracker
        const tracker = casinoJamAssets.find(
          ({ value: [owner, asset] }) =>
            asset.variant.type === "Player" &&
            asset.variant.value.type === "Tracker" &&
            owner === selectedAccount.address
        );

        console.log("tracker", tracker);

        const trackerValue = tracker?.value[1] as PlayerTrackerType;

        const slotResults = [
          unpackSlotResult(trackerValue.variant.value.value.slot_a_result),
          unpackSlotResult(trackerValue.variant.value.value.slot_b_result),
          unpackSlotResult(trackerValue.variant.value.value.slot_c_result),
          unpackSlotResult(trackerValue.variant.value.value.slot_d_result),
        ];

        return displaySlotMachine({
          multiplier: multiplierDisplay,
          wheels: slotResults,
          rewardUnit: chainInfo?.properties.tokenSymbol,
        });
      } else {
        const err = result.dispatchError.value as CasinojamDispatchError;
        return formatTransitionError(err);
      }
    }

    return "Invalid command, use gamble &lt;multiplier&gt;";
  },
  help: {
    command: "gamble <multiplier>",
    description: "Try your luck at the slot machine",
  },
};
