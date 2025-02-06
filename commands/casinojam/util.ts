import { AvailableApis } from "@/types";
import type { casinojam } from "@polkadot-api/descriptors";
import type { TypedApi } from "polkadot-api";

export function isCasinoJamApi(
  api: AvailableApis
): api is TypedApi<typeof casinojam> {
  console.log("isCasinoJamApi", api);

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
