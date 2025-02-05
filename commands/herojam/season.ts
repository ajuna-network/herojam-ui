import { getChainState } from "@/store/chain-store";
import { Command } from "@/types/command";

export const season: Command = {
  execute: async () => {
    const { heroJamApi } = getChainState();

    if (!heroJamApi) return "No HeroJam API available";

    const seasonStatus =
      await heroJamApi.query.HeroJamSeasons.CurrentSeasonStatus.getValue();

    const seasonSchedules =
      await heroJamApi.query.HeroJamSeasons.SeasonSchedules.getValue(
        seasonStatus?.season_id ?? 0
      );

    return `Season: ${JSON.stringify(
      { seasonStatus, seasonSchedules },
      null,
      2
    )}`;
  },
  help: "season - Display the season info",
};
