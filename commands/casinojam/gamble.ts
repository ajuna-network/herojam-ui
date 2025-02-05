import { Command } from "@/types/command";
import {
  generateSlotMachine,
  generateRandomWheels,
  type SlotSymbol,
  symbols,
} from "./util";

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
  execute: async (_, { onProcessing }) => {
    if (!onProcessing) return "Error: Processing callback not available";

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
  help: "gamble - Try your luck at the slot machine",
};
