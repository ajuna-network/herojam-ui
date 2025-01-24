import type { Command } from "@/types/command";

export const createHero: Command = {
  execute: (): string => `
      /\\
     /  \\
    /____\\
   /      \\
  /        \\
  |  |  |  |
  |  |  |  |
  |  |  |  |
  |__|__|__|
     |  |
     |  |
    _|  |_
   |______|
  `,
  help: "create hero - Create a new hero",
};
