import type { Command } from "@/types/command";
import { commands } from "../index";

export const help: Command = {
  execute: (): string => {
    const helpTexts = Object.entries(commands)
      .map(([name, command]) => command.help || `${name} - No help available`)
      .sort()
      .join("\n");

    return `
Available commands:
${helpTexts}
`;
  },
  help: "help - Display this help message",
};
