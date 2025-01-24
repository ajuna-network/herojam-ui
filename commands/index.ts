import { echo } from "./echo";
import { help } from "./help";
import { createHero } from "./create-hero";
import { welcome } from "./welcome";
import { organizer } from "./organizer";
import { season } from "./season";
import type { Command } from "@/types/command";

export const commands: Record<string, Command> = {
  echo,
  help,
  "create hero": createHero,
  welcome,
  organizer,
  season,
};
