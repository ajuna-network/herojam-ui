import type { Command, CommandContext } from "@/types/command";
import { createPlayer } from "./create/player";
import { createMachine } from "./create/machine";

export const create: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, client, activeSigner, selectedAccount } = context;

    if (!api || !client || !activeSigner || !selectedAccount) {
      return "Error: API, client, activeSigner, or selectedAccount is not available";
    }

    const subCommand = args[0]?.toLowerCase();

    if (!subCommand) {
      return "Error: Please specify 'player' or 'machine' as a subcommand";
    }

    switch (subCommand) {
      case "player":
        return createPlayer.execute(args.slice(1), context);
      case "machine":
        return createMachine.execute(args.slice(1), context);
      default:
        return "Error: Invalid subcommand. Use 'player' or 'machine'";
    }
  },
  help: {
    command: "create <player|machine>",
    description: "create a new player or machine asset",
  },
};
