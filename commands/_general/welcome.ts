import type { Command } from "@/types/command";
import { rainbowize } from "@/lib/utils";

const casinoJamAscii = `
 ▗▄▄▖▗▞▀▜▌ ▄▄▄ ▄ ▄▄▄▄   ▄▄▄  ▗▖ ▗▄▖ ▗▖  ▗▖
▐▌   ▝▚▄▟▌▀▄▄  ▄ █   █ █   █ ▐▌▐▌ ▐▌▐▛▚▞▜▌
▐▌        ▄▄▄▀ █ █   █ ▀▄▄▄▀ ▐▌▐▛▀▜▌▐▌  ▐▌
▝▚▄▄▖          █          ▗▄▄▞▘▐▌ ▐▌▐▌  ▐▌
`;

const welcomeMessage =
  "CasinoJam is a game for interacting with the SAGE game engine.";

export const welcome: Command = {
  execute: async (): Promise<string> =>
    Promise.resolve(rainbowize(casinoJamAscii) + "\n" + welcomeMessage),
  help: {
    command: "welcome",
    description: "display a welcome message",
  },
};
