import type { Command } from "@/types/command";
import { rainbowize } from "@/lib/utils";

const heroJamAscii = `
▗▖ ▗▖▗▞▀▚▖ ▄▄▄ ▄▄▄  ▗▖▗▞▀▜▌▄▄▄▄  
▐▌ ▐▌▐▛▀▀▘█   █   █ ▐▌▝▚▄▟▌█ █ █ 
▐▛▀▜▌▝▚▄▄▖█   ▀▄▄▄▀ ▐▌     █   █ 
▐▌ ▐▌            ▗▄▄▞▘           
`;

const welcomeMessage =
  "Hero Jam is a game for interacting with the SAGE game engine.";

export const welcome: Command = {
  execute: (): string => rainbowize(heroJamAscii) + "\n" + welcomeMessage,
  help: "welcome - Display a welcome message",
};
