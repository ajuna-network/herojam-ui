import { Command } from "@/types/command";
import {
  generateSlotMachine,
  generateRandomWheels,
  type SlotSymbol,
  symbols,
  isCasinoJamApi,
} from "./util";
import { Enum } from "polkadot-api";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animateSpinning(onProcessing: (output: string) => void) {
  if (!onProcessing) return;

  // Number of animation frames
  const frames = 20;

  try {
    for (let i = 0; i < frames; i++) {
      // Generate random symbols for this frame
      const spinningWheels: SlotSymbol[] = Array(4)
        .fill(null)
        .map(() => symbols[Math.floor(Math.random() * symbols.length)]);

      const spinningDisplay = generateSlotMachine({
        wheels: spinningWheels,
        spinning: true,
      });

      onProcessing(`${spinningDisplay}\n\n`);
      await sleep(100); // Shorter delay between frames
    }
  } catch (error) {
    console.error("Animation error:", error);
  }
}

export const gamble: Command = {
  execute: async (_, { onProcessing, api, activeSigner, selectedAccount }) => {
    if (!onProcessing) return "Error: Processing callback not available";

    if (!api || !isCasinoJamApi(api))
      return "Error: API or client not available";

    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    const tx = api.tx.CasinoJamSage.state_transition({
      transition_id: { type: "Create", value: Enum("Player") },
      asset_ids: [1],
      payment_kind: undefined,
    });

    const result = await tx.signAndSubmit(activeSigner);

    console.log("result", result);

    try {
      // Animate the spinning
      await animateSpinning(onProcessing);

      // Generate final result
      const finalWheels = generateRandomWheels();
      const finalDisplay = generateSlotMachine({
        wheels: finalWheels,
        spinning: false,
      });

      // Check if all symbols match
      const isWinner = finalWheels.every((symbol) => symbol === finalWheels[0]);
      const resultMessage = isWinner
        ? " . 🎉 JACKPOT! 🎉"
        : "  😫 Try again! 😫";

      return `${finalDisplay}\n${resultMessage}`;
    } catch (error) {
      console.error("Gamble error:", error);
      return "An error occurred while gambling";
    }
  },
  help: "<span class='text-blue-500'>gamble</span> - Try your luck at the slot machine",
};
