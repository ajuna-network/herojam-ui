import type { Command } from "@/types/command";
import { commands } from "../index";

export const help: Command = {
  execute: async (): Promise<string> => {
    return `
Available commands:

${Object.entries(commands)
  .map(
    ([, command]) =>
      `<span class="text-blue-500">${command.help.command}</span>: ${command.help.description}`
  )
  .join("\n")}
`;
  },
  help: {
    command: "help",
    description: "Display this help message",
  },
};
