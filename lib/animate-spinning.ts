import { sleep } from "@/commands/casinojam/util";

import { displaySlotMachine } from "@/commands/casinojam/util";

import { unpackSlotResult } from "@/commands/casinojam/util";

import { UnpackedSlotResult } from "@/commands/casinojam/types";

export async function animateSpinning(
  onProcessing: (output: string) => void,
  stopSignal: { shouldStop: boolean },
  multiplier: string
) {
  if (!onProcessing) return;

  try {
    while (!stopSignal.shouldStop) {
      // Generate 4 random packed numbers that fit within valid slot result ranges
      // Each number needs to fit within 16 bits (0xFFFF) as per unpackSlotResult structure:
      // - slot1, slot2, slot3: 4 bits each (0-15)
      // - bonus1, bonus2: 2 bits each (0-3)
      const spinningWheels: UnpackedSlotResult[] = Array(4)
        .fill(null)
        .map(() => {
          // Generate a random 16-bit number with valid ranges for each field
          const packedNumber =
            ((Math.floor(Math.random() * 0xf) & 0xf) << 12) | // slot1 (4 bits)
            ((Math.floor(Math.random() * 0xf) & 0xf) << 8) | // slot2 (4 bits)
            ((Math.floor(Math.random() * 0xf) & 0xf) << 4) | // slot3 (4 bits)
            ((Math.floor(Math.random() * 0x3) & 0x3) << 2) | // bonus1 (2 bits)
            (Math.floor(Math.random() * 0x3) & 0x3); // bonus2 (2 bits)

          return unpackSlotResult(packedNumber);
        });

      const spinningDisplay = displaySlotMachine({
        multiplier,
        wheels: spinningWheels,
        rewardUnit: "AJUN",
        isSpinning: true,
      });

      onProcessing(`${spinningDisplay}\n\n`);
      await sleep(100);
    }
  } catch (error) {
    console.error("Animation error:", error);
  }
}
