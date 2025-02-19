import type { Command } from "@/types/command";

import { help } from "@/commands/_general/help";
import { welcome } from "@/commands/_general/welcome";
import { organizer } from "@/commands/casinojam/organizer";
import { season } from "@/commands/casinojam/season";
import { whoami } from "@/commands/_general/whoami";
import { transfer } from "@/commands/_general/transfer";

import { gamble } from "@/commands/casinojam/gamble";
import { player } from "@/commands/casinojam/player";
import { machine } from "@/commands/casinojam/machine";

import { create } from "@/commands/casinojam/create";
import { deposit } from "@/commands/casinojam/deposit";
import { rent } from "@/commands/casinojam/rent";
import { reserve } from "@/commands/casinojam/reserve";

import { players } from "@/commands/casinojam/players";
import { machines } from "@/commands/casinojam/machines";
import { seats } from "@/commands/casinojam/seats";
import { seat } from "./casinojam/seat";

export const commands: Record<string, Command> = {
  // casinojam commands
  create,
  deposit,
  rent,
  reserve,
  gamble,

  players,
  machines,
  machine,
  seats,
  seat,

  season,
  organizer,
  player,

  // general commands
  help,
  welcome,
  whoami,
  transfer,
};
