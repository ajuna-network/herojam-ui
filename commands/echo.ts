import type { Command } from "@/types/command";

export const echo: Command = {
  execute: (args: string[]): string => args.join(" "),
  help: "echo [text] - Display the given text",
};
