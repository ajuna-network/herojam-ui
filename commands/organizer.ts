import { Command } from "@/types/command";
import { getChainState } from "@/store/chain-store";

export const organizer: Command = {
  execute: async () => {
    const { heroJamApi } = getChainState();

    if (!heroJamApi) return "No HeroJam API available";

    // Subscribe to organizer value
    const organizer = await heroJamApi.query.HeroJamSage.Organizer.getValue();

    return `Organizer: ${organizer}`;
  },
  help: "organizer - Display the organizer",
};
