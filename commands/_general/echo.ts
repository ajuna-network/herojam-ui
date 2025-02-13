import type { Command } from "@/types/command";

export const echo: Command = {
  execute: async (args: string[]): Promise<string> => args.join(" "),
  help: "<span class='text-blue-500'>echo [text]</span> - Display the given text",
};
