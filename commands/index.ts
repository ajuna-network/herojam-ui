import { echo } from "./_general/echo";
import { help } from "./_general/help";
import { createHero } from "./herojam/create-hero";
import { welcome } from "./_general/welcome";
import { organizer } from "./herojam/organizer";
import { season } from "./herojam/season";
import { whoami } from "./_general/whoami";
import { hero } from "./herojam/hero";
import { heroes } from "./herojam/heroes";
import { transfer } from "./_general/transfer";
import { gamble } from "./casinojam/gamble";
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
  gamble,
};
