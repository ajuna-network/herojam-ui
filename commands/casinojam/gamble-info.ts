import type { Command, CommandContext } from "@/types/command";
import { isCasinoJamApi } from "./util";
import { AssetType, MachineType, SeatType } from "./types";

// Define a separate type guard function
function isMachineAsset(entry: { value: [unknown, AssetType] }): entry is {
  value: [
    unknown,
    AssetType & {
      variant: { type: "Machine"; value: { sub_variant: { type: "Bandit" } } };
    }
  ];
} {
  const asset = entry.value[1];
  return (
    asset.variant.type === "Machine" &&
    asset.variant.value.sub_variant.type === "Bandit"
  );
}

function isSeatAsset(entry: { value: [unknown, AssetType] }): entry is {
  value: [unknown, AssetType & { variant: { type: "Seat" } }];
} {
  const asset = entry.value[1];
  return asset.variant.type === "Seat";
}

export const gambleInfo: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!selectedAccount || !activeSigner) return "No selected account";

    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();

    const playerMeId = casinoJamAssets.find(
      ({ value: [owner, asset] }) =>
        asset.variant.type === "Player" &&
        asset.variant.value.type === "Human" &&
        owner === selectedAccount.address
    )?.value[1].id;

    const machines = casinoJamAssets.filter(isMachineAsset);
    const seats = casinoJamAssets.filter(isSeatAsset);

    // Create header
    const header = [
      "machine | jackpot | seat  | player    ",
      "--------+---------+-------+--------",
    ].join("\n");

    // Format each row
    const rows = machines.map(({ value: [, machine] }) => {
      const machineId = machine.id.toString().padEnd(7);
      const machineVariant = machine.variant.value as MachineType;
      const jackpot = machineVariant.sub_variant.value.jackpot
        .toString()
        .padEnd(7);
      const relatedSeat = seats.find(
        ({ value: [, seat] }) =>
          seat.variant.type === "Seat" &&
          seat.variant.value.machine_id === machine.id
      );

      const relatedSeatAsset = relatedSeat?.value[1].variant.value as
        | SeatType
        | undefined;

      const seatId = relatedSeat
        ? relatedSeat.value[1].id.toString().padEnd(5)
        : "N/A".padEnd(5);

      const seatPlayer = relatedSeatAsset?.player_id;

      const playerId = seatPlayer
        ? seatPlayer === playerMeId
          ? "ME"
          : seatPlayer
        : "FREE";

      return `${machineId} | ${jackpot} | ${seatId} | ${playerId}`;
    });

    return `\n${header}\n${rows.join("\n")}`;
  },
  help: {
    command: "gamble info",
    description: "Display info on where to gamble",
  },
};
