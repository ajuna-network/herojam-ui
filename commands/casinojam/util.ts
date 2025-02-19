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

export function generateRandomWheels(): SlotSymbol[] {
  return Array(4)
    .fill(null)
    .map(() => symbols[Math.floor(Math.random() * symbols.length)]);
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
