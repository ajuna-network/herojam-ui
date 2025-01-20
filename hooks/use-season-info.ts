"use client";

import { ajudev, AjudevQueries } from "@/.papi/descriptors/dist";
import { useChain } from "@/providers/chain-provider";
import { TypedApi } from "polkadot-api";
import { useEffect, useState } from "react";

export type SeasonInfo = {
  seasonNumber: number | undefined;
  seasonStatus:
    | AjudevQueries["HeroJamSeasons"]["CurrentSeasonStatus"]["Value"]
    | undefined;
  seasonSchedules:
    | AjudevQueries["HeroJamSeasons"]["SeasonSchedules"]["Value"]
    | undefined;
};

export function useSeasonInfo() {
  const { api, activeChain } = useChain();
  const heroJamApi =
    activeChain?.key === "ajudev"
      ? (api as TypedApi<typeof ajudev>)
      : undefined;

  const [seasonInfo, setSeasonInfo] = useState<SeasonInfo>({
    seasonNumber: undefined,
    seasonStatus: undefined,
    seasonSchedules: undefined,
  });

  useEffect(() => {
    if (!heroJamApi) return;

    const seasonStatusSub =
      heroJamApi.query.HeroJamSeasons.CurrentSeasonStatus.watchValue(
        "best"
      ).subscribe((value) => {
        setSeasonInfo((prev) => ({
          ...prev,
          seasonNumber: value?.season_id,
          seasonStatus: value,
        }));
      });

    return () => {
      seasonStatusSub?.unsubscribe();
    };
  }, [heroJamApi]);

  // Separate useEffect for season schedules that depends on seasonNumber
  useEffect(() => {
    if (!heroJamApi || !seasonInfo.seasonNumber) return;

    const schedulesSub =
      heroJamApi.query.HeroJamSeasons.SeasonSchedules.watchValue(
        seasonInfo.seasonNumber,
        "best"
      ).subscribe((value) => {
        setSeasonInfo((prev) => ({
          ...prev,
          seasonSchedules: value,
        }));
      });

    return () => {
      schedulesSub?.unsubscribe();
    };
  }, [heroJamApi, seasonInfo.seasonNumber]);

  return seasonInfo;
}
