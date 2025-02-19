import type { Command } from "@/types/command";
import { rainbowize } from "@/lib/utils";

const casinoJamAscii = `
 ▗▄▄▖▗▞▀▜▌ ▄▄▄ ▄ ▄▄▄▄   ▄▄▄  ▗▖ ▗▄▖ ▗▖  ▗▖
▐▌   ▝▚▄▟▌▀▄▄  ▄ █   █ █   █ ▐▌▐▌ ▐▌▐▛▚▞▜▌
▐▌        ▄▄▄▀ █ █   █ ▀▄▄▄▀ ▐▌▐▛▀▜▌▐▌  ▐▌
▝▚▄▄▖          █          ▗▄▄▞▘▐▌ ▐▌▐▌  ▐▌
`;

const welcomeMessage =
  "CasinoJam is a demo app for interacting with the SAGE game engine.\nYou might want to 'create player' or 'create machine' first.";

export const welcome: Command = {
  execute: async (): Promise<string> =>
    Promise.resolve(rainbowize(casinoJamAscii) + "\n" + welcomeMessage),
  help: {
    command: "welcome",
    description: "Display a welcome message",
  },
};
