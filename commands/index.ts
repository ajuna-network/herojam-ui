import { echo } from "@/commands/_general/echo";
import { help } from "@/commands/_general/help";
import { welcome } from "@/commands/_general/welcome";
import { organizer } from "@/commands/casinojam/organizer";
import { season } from "@/commands/casinojam/season";
import { whoami } from "@/commands/_general/whoami";
import { transfer } from "@/commands/_general/transfer";

import { gamble } from "@/commands/casinojam/gamble";
import { player } from "@/commands/casinojam/player";
import { machine } from "@/commands/casinojam/machine";
import { machines } from "@/commands/casinojam/machines";
import { create } from "@/commands/casinojam/create";

import type { Command } from "@/types/command";

export const commands: Record<string, Command> = {
  // general commands
  echo,
  help,
  welcome,
  whoami,
  transfer,

  // casinojam commands
  create,
  gamble,
  season,
  organizer,
  player,
  machines,
  machine,
};
