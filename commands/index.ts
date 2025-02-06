import { echo } from "./_general/echo";
import { help } from "./_general/help";
import { welcome } from "./_general/welcome";
import { organizer } from "./casinojam/organizer";
import { season } from "./casinojam/season";
import { whoami } from "./_general/whoami";
import { transfer } from "./_general/transfer";
import { gamble } from "./casinojam/gamble";
import type { Command } from "@/types/command";

export const commands: Record<string, Command> = {
  // general commands
  echo,
  help,
  welcome,
  whoami,
  transfer,

  // casinojam commands
  gamble,
  season,
  organizer,
};
