"use client";

import { Smile, UserCheck } from "lucide-react";

import { useSeasonInfo } from "@/hooks/use-season-info";
import { stringifyWithBigInt } from "@/lib/utils";
import { TxButton } from "../ui/tx-button";
import { useChain } from "@/providers/chain-provider";
import { ajudev } from "@/.papi/descriptors/dist";
import { Enum, TypedApi } from "polkadot-api";
import { useBlockNumber } from "@/hooks/use-block-number";
import { useHerojamAssets } from "@/hooks/use-herojam-assets";
import { useHerojamOrganizer } from "@/hooks/use-herojam-organizer";

export function HeroJamButtons() {
  const seasonInfo = useSeasonInfo();
  const assets = useHerojamAssets();
  const organizer = useHerojamOrganizer();
  const { api, activeChain } = useChain();
  const blockNumber = useBlockNumber() || 0;

  const heroJamApi =
    activeChain?.key === "ajudev"
      ? (api as TypedApi<typeof ajudev>)
      : undefined;

  const sudoCall = heroJamApi?.tx.HeroJamSage.set_organizer({
    organizer: "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
  }).decodedCall;

  if (!sudoCall) return null;

  const nextSeason =
    seasonInfo?.seasonNumber !== undefined ? seasonInfo.seasonNumber + 1 : 0;

  return (
    <div className="flex flex-col md:flex-row justify-between w-full gap-4">
      <div className="flex flex-col gap-2">
        <TxButton
          transaction={heroJamApi?.tx.Sudo.sudo({ call: sudoCall })}
          disabled={!sudoCall}
        >
          <UserCheck />
          <span>Make Alice Organizer</span>
        </TxButton>
        <TxButton
          transaction={heroJamApi?.tx.HeroJamSeasons.update_season({
            season_id: nextSeason,
            config: {
              fee: {
                transfer_asset: BigInt(0),
                buy_asset_min: BigInt(0),
                buy_percent: 0,
                upgrade_asset_inventory: BigInt(0),
                unlock_trade_asset: BigInt(0),
                unlock_transfer_asset: BigInt(0),
                state_transition_base_fee: BigInt(0),
              },
            },
            metadata: undefined,
            schedule: {
              early_start: blockNumber + 10,
              start: blockNumber + 50,
              end: blockNumber + 1000,
            },
          })}
        >
          <Smile /> Start Next Season ({nextSeason})
        </TxButton>
        <TxButton
          transaction={heroJamApi?.tx.HeroJamSage.state_transition({
            transition_id: {
              type: "HeroJam",
              value: Enum("Create"),
            },
            asset_ids: [],
            payment: undefined,
          })}
        >
          🦹‍♂️
          <span>Claim Hero</span>
        </TxButton>
      </div>

      <div className="flex flex-col text-xs gap-2">
        <label>Organizer</label>
        <div className="flex flex-col gap-2 p-4 bg-black/90 rounded-md text-white">
          <pre>{organizer}</pre>
        </div>
        <label>Current Season Status</label>
        <div className="flex flex-col gap-2 p-4 bg-black/90 rounded-md text-white">
          <pre>{stringifyWithBigInt(seasonInfo)}</pre>
        </div>
        <label>Assets</label>
        <div className="flex flex-col gap-2 p-4 bg-black/90 rounded-md text-white">
          <pre>{stringifyWithBigInt(assets)}</pre>
        </div>
      </div>
    </div>
  );
}
