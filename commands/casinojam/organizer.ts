import { Command } from "@/types/command";
import { isCasinoJamApi } from "./util";

export const organizer: Command = {
  execute: async (_, { api }) => {
    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";

    // Subscribe to organizer value
    const organizer = await api.query.CasinoJamSage.Organizer.getValue();

    return `Organizer: ${organizer}`;
  },
  help: "organizer - Display the organizer",
};
