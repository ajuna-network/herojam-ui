import type { Command } from "@/types/command";
import { commands } from "../index";

export const help: Command = {
  execute: async (): Promise<string> => {
    // Group commands by category
    const playerCommands = commands.player.help;
    const machineCommands = commands.machine.help;
    const generalCommands = Object.entries(commands)
      .filter(([name]) => !["player", "machine"].includes(name))
      .map(([, command]) => command.help)
      .join("\n");

    return `
available commands
------------------
${playerCommands}

${machineCommands}

${generalCommands}
`;
  },
  help: "<span class='text-blue-500'>help</span> - Display this help message",
};
