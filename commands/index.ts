import { echo } from "./echo";
import { help } from "./help";
import { createHero } from "./create-hero";
import { welcome } from "./welcome";
import { organizer } from "./organizer";
import { season } from "./season";
import { whoami } from "./whoami";
import { hero } from "./hero";
import { heroes } from "./heroes";
import { transfer } from "./transfer";

import type { Command } from "@/types/command";

export const commands: Record<string, Command> = {
  echo,
  help,
  "create hero": createHero,
  welcome,
  organizer,
  season,
  whoami,
  hero,
  heroes,
  transfer,
};
