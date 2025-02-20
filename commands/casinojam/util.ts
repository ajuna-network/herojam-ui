import { trimAddress } from "@/lib/utils";
import { AvailableApis } from "@/types";
import type { casinojam } from "@polkadot-api/descriptors";
import { Enum, type TypedApi } from "polkadot-api";

import {
  AssetWithKey,
  MachineType,
  MachineUI,
  MultiplierType,
  MultiplierValuesType,
  PlayerUI,
  TokenType,
  TokenValuesType,
  UnpackedSlotResult,
} from "./types";
import { CasinojamDispatchError } from "../../.papi/descriptors/dist/casinojam";
export const MULTIPLIER_VALUES: MultiplierValuesType[] = [
  "V0",
  "V1",
  "V2",
  "V3",
  "V4",
  "V5",
  "V6",
  "V7",
  "V8",
  "V9",
];

export function validateMultiplierType(multiplier: string): MultiplierType {
  if (!MULTIPLIER_VALUES.includes(multiplier as MultiplierValuesType)) {
    throw new Error(
      `Invalid multiplier. Valid values are: ${MULTIPLIER_VALUES.join(", ")}`
    );
  }
  return Enum(multiplier as MultiplierValuesType);
}

export const TOKEN_TYPE_VALUES: TokenValuesType[] = [
  "T1",
  "T10",
  "T100",
  "T1000",
  "T10000",
  "T100000",
  "T1000000",
];

export function validateTokenType(tokenType: string): TokenType {
  if (!TOKEN_TYPE_VALUES.includes(tokenType as TokenValuesType)) {
    throw new Error(
      `Invalid token type. Valid values are: ${TOKEN_TYPE_VALUES.join(", ")}`
    );
  }

  return Enum(tokenType as TokenValuesType);
}

export function isCasinoJamApi(
  api: AvailableApis
): api is TypedApi<typeof casinojam> {
  return Boolean(
    (api as TypedApi<typeof casinojam>)?.tx?.CasinoJamSage &&
      (api as TypedApi<typeof casinojam>)?.tx?.CasinoJamSeasons &&
      (api as TypedApi<typeof casinojam>)?.tx?.CasinoJamTournament &&
      (api as TypedApi<typeof casinojam>)?.tx?.CasinoJamAffiliates
  );
}

export type SlotSymbol = "🍒" | "🍊" | "🍋" | "7️⃣" | "💎";

export const symbols: SlotSymbol[] = ["🍒", "🍊", "🍋", "7️⃣", "💎"];

export function generateRandomWheels(): number[] {
  return [
    Math.floor(Math.random() * 0xf), // slot1: 0-15
    Math.floor(Math.random() * 0xf), // slot2: 0-15
    Math.floor(Math.random() * 0xf), // slot3: 0-15
    Math.floor(Math.random() * 0x3), // bonus1: 0-3
    Math.floor(Math.random() * 0x3), // bonus2: 0-3
  ];
}

export function generateSlotMachine({
  wheels,
  spinning = false,
}: {
  wheels: SlotSymbol[];
  spinning?: boolean;
}): string {
  if (!wheels || wheels.length !== 4) {
    throw new Error("Invalid wheels configuration");
  }

  const arm = spinning ? "═" : "║";
  return `
╔══════════════════╗
║    CASINO JAM    ║${arm}
╠══════════════════╣${arm}
║    ${wheels.join(" ")}　　 ║${arm}
╚══════════════════╝╝
`;
}

export function displaySlotMachine({
  multiplier,
  wheels,
  rewardUnit,
  isSpinning = false,
}: {
  multiplier: string;
  wheels: UnpackedSlotResult[];
  rewardUnit: string;
  isSpinning?: boolean;
}) {
  const result = [];
  for (const wheel of wheels) {
    const mainSymbols = [
      getSlotSymbol(wheel.slot1),
      getSlotSymbol(wheel.slot2),
      getSlotSymbol(wheel.slot3),
    ].join("   ");

    const bonusSymbols = [
      getSlotSymbol(wheel.bonus1),
      getSlotSymbol(wheel.bonus2),
    ].join("   ");

    const reward = calculateSpinReward(10, wheel);

    let display = `| ${mainSymbols} | ${bonusSymbols} |`;

    if (isSpinning) {
      display = `| ${mainSymbols} | ${bonusSymbols} |`;
    } else {
      display = `| ${mainSymbols} | ${bonusSymbols} | --> ${reward} ${rewardUnit} `;
    }

    result.push(display);
  }

  return `
${multiplier}
+-------------+--------+
${result.join("\n")}
+-------------+--------+`;
}

export function displayPlayer(player: PlayerUI) {
  return `| id: ${player.id}
| genesis: ${player.genesis}
| owner: ${trimAddress(player.owner, 6)}
| tracker: ${player.tracker}
| funds: ${player.funds}
| seat: ${player.seat ?? "none"}
| machines: [${player.machines.join(", ")}]
`;
}

export function displayMachine(machine: MachineUI) {
  return `| id: ${machine.id}
| genesis: ${machine.genesis}
| owner: ${trimAddress(machine.owner, 6)}
| funds: ${machine.funds}
| seat_limit: ${machine.seat_limit}
| seat_linked: ${machine.seat_linked}
| value_1_factor: ${machine.value_1_factor}
| value_2_factor: ${machine.value_2_factor}
| value_3_factor: ${machine.value_3_factor}
| value_1_mul: ${machine.value_1_mul}
| value_2_mul: ${machine.value_2_mul}
| value_3_mul: ${machine.value_3_mul}
| sub_variant: ${machine.sub_variant.type} ${JSON.stringify(
    machine.sub_variant
  )}
| seats: [${machine.seats.join(", ")}]
`;
}

export function formatTransitionError(error: CasinojamDispatchError) {
  console.warn("error", error);
  return `❌ Transition failed: ${error.type} ${error.value?.type} ${error.value?.value?.type} ${error.value?.value?.value?.code}`;
}

/**
 * Convert an AssetType to a MachineUI object with nested fields
 * @param asset
 * @returns
 */
export function toUiMachine(machines: MachineType[]) {
  console.warn("toUiMachine not implemented");
  return machines;
}

export function displayObject(obj: Record<string, unknown>) {
  return Object.entries(obj)
    .map(([key, value]) => {
      const displayValue =
        typeof value === "object" && value !== null
          ? JSON.stringify(value)
          : value;
      return `| ${key}: ${displayValue}`;
    })
    .join("\n");
}

export function displayMachineEntry({
  machine,
  funds,
  seats,
}: {
  machine: AssetWithKey;
  funds: bigint;
  seats: number[];
}) {
  return displayAsset(machine, {
    funds: funds.toString(),
    seats: seats.join(", "),
  });
}

export function displayAsset(
  asset: AssetWithKey,
  ...extra: Record<string, unknown>[]
) {
  let uiAsset = {
    id: asset[1].id,
    owner: asset[0],
    genesis: asset[1].genesis,
    variant: asset[1].variant.type,
    ...asset[1].variant.value,
  };

  // Merge any extra properties at the end
  extra.forEach((obj) => {
    uiAsset = { ...uiAsset, ...obj };
  });

  return Object.entries(uiAsset)
    .map(([key, value]) => {
      const displayValue =
        typeof value === "object" && value !== null
          ? JSON.stringify(value)
          : value;
      return `| ${key}: ${displayValue}`;
    })
    .join("\n");
}

interface UnpackedSlotResult {
  slot1: number;
  slot2: number;
  slot3: number;
  bonus1: number;
  bonus2: number;
}

export function unpackSlotResult(packedResult: number): UnpackedSlotResult {
  const value = Number(packedResult) >>> 0;

  const result = {
    slot1: (value >> 12) & 0xf, // Bits 15-12 (4 bits)
    slot2: (value >> 8) & 0xf, // Bits 11-8  (4 bits)
    slot3: (value >> 4) & 0xf, // Bits 7-4   (4 bits)
    bonus1: (value >> 2) & 0x3, // Bits 3-2   (2 bits)
    bonus2: value & 0x3, // Bits 1-0   (2 bits)
  };

  return result;
}

// Helper to convert slot numbers to symbols
export function getSlotSymbol(slotNumber: number): string {
  const symbols = ["🍒", "🍋", "🍊", "🍇", "💎", "7️⃣", "🎰", "🎲", "🃏", "🎯"];
  return symbols[slotNumber] || "❓";
}

export function calculateSpinReward(
  minReward: number,
  spin: UnpackedSlotResult
): number {
  const factorMultiplier = (() => {
    if (spin.slot1 === spin.slot2 && spin.slot2 === spin.slot3) {
      switch (spin.slot1) {
        case 0:
          return 2;
        case 1:
          return 4;
        case 2:
          return 8;
        case 3:
          return 16;
        case 4:
          return 1;
        case 5:
          return 32;
        case 6:
          return 64;
        case 7:
          return 128;
        case 8:
          return 256;
        case 9:
          return 512;
        default:
          return 0;
      }
    }
    return 0;
  })();

  const spinFactor = minReward * factorMultiplier;

  const bonusFactor = (() => {
    if (spin.bonus1 === spin.bonus2) {
      switch (spin.bonus1) {
        case 4:
          return 1;
        case 5:
          return 2;
        case 6:
          return 4;
        default:
          return 0;
      }
    }
    return 0;
  })();

  const isFullLine =
    spin.slot1 === spin.slot2 &&
    spin.slot2 === spin.slot3 &&
    spin.slot3 === spin.bonus1 &&
    spin.bonus1 === spin.bonus2;

  let reward = spinFactor;

  if (isFullLine) reward = spinFactor * (128 + bonusFactor);
  else if (spinFactor > 0 && bonusFactor > 0)
    reward = spinFactor + 512 * bonusFactor;

  if (reward === 0 && spin.bonus1 === 4 && spin.bonus2 === 4) reward = 1;

  return reward;
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
