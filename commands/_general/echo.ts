import type { Command } from "@/types/command";

export const echo: Command = {
  execute: async (args: string[]): Promise<string> => args.join(" "),
  help: "echo [text] - Display the given text",
};
