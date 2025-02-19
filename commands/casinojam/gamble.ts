import { Command } from "@/types/command";
import {
  isCasinoJamApi,
  formatTransitionError,
  MULTIPLIER_VALUES,
} from "./util";
import { Enum } from "polkadot-api";
import { MultiplierType, MultiplierValuesType, SeatType } from "./types";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";
import { gambleInfo } from "./gamble-info";
// function sleep(ms: number): Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function animateSpinning(
//   onProcessing: (output: string) => void,
//   stopSignal: { shouldStop: boolean }
// ) {
//   if (!onProcessing) return;

//   try {
//     while (!stopSignal.shouldStop) {
//       // Generate random symbols for this frame
//       const spinningWheels: SlotSymbol[] = Array(4)
//         .fill(null)
//         .map(() => symbols[Math.floor(Math.random() * symbols.length)]);

//       const spinningDisplay = generateSlotMachine({
//         wheels: spainningWheels,
//         spinning: true,
//       });

//       onProcessing(`${spinningDisplay}\n\n`);
//       await sleep(100);
//     }
//   } catch (error) {
//     console.error("Animation error:", error);
//   }
// }

export const gamble: Command = {
  execute: async (
    args: string[],
    { onProcessing, api, activeSigner, selectedAccount }
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

    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    if (args.length === 1) {
      // COMMAND: gamble

      const multiplierArg = args[0].toUpperCase();

      if (!MULTIPLIER_VALUES.includes(multiplierArg as MultiplierValuesType)) {
        return `Invalid multiplier. Valid values are: ${MULTIPLIER_VALUES.join(
          ", "
        )}`;
      }

      const multiplier: MultiplierType = Enum(
        multiplierArg as MultiplierValuesType
      );

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
        asset_ids: [playerId, meTrackerId, currentSeatId, currentMachineId], //player, tracker, seat, machine,
        payment_kind: undefined,
      });

      const stopSignal = { shouldStop: false };
      // const animationPromise = animateSpinning(onProcessing, stopSignal);

      const result = await tx.signAndSubmit(activeSigner);
      stopSignal.shouldStop = true;
      // await animationPromise;

      console.info("result gamble", result);

      if (result.ok) {
        return "✅ You won";
      } else {
        const err = result.dispatchError.value as CasinojamDispatchError;
        return formatTransitionError(err);
      }

      // console.log("result", result);

      // try {
      //   // Animate the spinning

      //   // Generate final result
      //   const finalWheels = generateRandomWheels();
      //   const finalDisplay = generateSlotMachine({
      //     wheels: finalWheels,
      //     spinning: false,
      //   });

      //   // Check if all symbols match
      //   const isWinner = finalWheels.every(
      //     (symbol) => symbol === finalWheels[0]
      //   );
      //   const resultMessage = isWinner
      //     ? " . 🎉 JACKPOT! 🎉"
      //     : "  😫 Try again! 😫";

      //   return `${finalDisplay}\n${resultMessage}`;
      // } catch (error) {
      //   console.error("Gamble error:", error);
      //   return "An error occurred while gambling";
      // }
    }

    return "Invalid command, use gamble &lt;multiplier&gt;";
  },
  help: {
    command: "gamble <multiplier>",
    description: "Try your luck at the slot machine",
  },
};
