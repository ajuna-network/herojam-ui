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
    if (!heroJamApi) {
      return;
    }

    const seasonStatusSub =
      heroJamApi.query.HeroJamSeasons.CurrentSeasonStatus.watchValue(
        "best"
      ).subscribe((value) => {
        setSeasonInfo((prev) => ({
          ...prev,
          seasonStatus: value,
        }));
      });

    const latestSeasonSub =
      heroJamApi.query.HeroJamSeasons.LatestSeason.watchValue("best").subscribe(
        (value) => {
          setSeasonInfo((prev) => ({
            ...prev,
            seasonNumber: value,
          }));
        }
      );

    if (seasonInfo.seasonNumber === undefined) {
      setSeasonInfo({
        seasonNumber: undefined,
        seasonStatus: undefined,
        seasonSchedules: undefined,
      });
      return;
    }

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

    // Don't forget to clean up subscriptions
    return () => {
      seasonStatusSub?.unsubscribe();
      latestSeasonSub?.unsubscribe();
      schedulesSub?.unsubscribe();
    };
  }, [heroJamApi, seasonInfo.seasonNumber]);

  return seasonInfo;
}
