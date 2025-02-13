import { CasinojamQueries } from "@polkadot-api/descriptors";
import { SS58String } from "polkadot-api";

export type AssetType = CasinojamQueries["CasinoJamSage"]["Assets"]["Value"][1];
export type AssetTypeVariant = AssetType["variant"];

export type MachineType = Extract<
  AssetTypeVariant,
  { type: "Machine" }
>["value"];
export type SeatType = Extract<AssetTypeVariant, { type: "Seat" }>["value"];
export type MultiplierType = MachineType["value_1_mul"];
export type MultiplierValuesType = MultiplierType extends { type: infer T }
  ? T
  : never;

export type TokenType = MachineType["value_1_factor"];
export type TokenValuesType = TokenType extends { type: infer T } ? T : never;

export type PlayerType = Extract<AssetTypeVariant, { type: "Player" }>["value"];
export type PlayerTrackerType = Extract<
  PlayerType,
  { type: "Tracker" }
>["value"];

export type PlayerUI = {
  id: number;
  genesis: number;
  owner: SS58String;
  tracker: number | undefined;
  funds?: bigint;
  seat?: number;
};

export type MachineUI = {
  id: number;
  genesis: number;
  owner: SS58String;
  seat_limit: number;
  seat_linked: number;
  value_1_factor: string;
  value_2_factor: string;
  value_3_factor: string;
  value_1_mul: string;
  value_2_mul: string;
  value_3_mul: string;
  sub_variant: MachineType["sub_variant"];
  seats: number[];
  funds?: bigint;
};
