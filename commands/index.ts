import type { Command } from "@/types/command";

import { help } from "@/commands/_general/help";
import { welcome } from "@/commands/_general/welcome";
import { organizer } from "@/commands/casinojam/organizer";
import { season } from "@/commands/casinojam/season";
import { whoami } from "@/commands/_general/whoami";
import { transfer } from "@/commands/_general/transfer";

import { create } from "@/commands/casinojam/create";
import { deposit } from "@/commands/casinojam/deposit";
import { rent } from "@/commands/casinojam/rent";
import { reserve } from "@/commands/casinojam/reserve";
import { release } from "@/commands/casinojam/release";
import { gambleInfo } from "./casinojam/gamble-info";
import { gamble } from "@/commands/casinojam/gamble";

import { players } from "./casinojam/players";
import { player } from "@/commands/casinojam/player";
import { machines } from "@/commands/casinojam/machines";
import { machine } from "@/commands/casinojam/machine";
import { seats } from "@/commands/casinojam/seats";
import { seat } from "./casinojam/seat";

export const commands: Record<string, Command> = {
  // casinojam transition commands
  create,
  deposit,
  rent,
  reserve,
  release,
  gamble,

  // casinojam info commands
  gambleInfo,
  players,
  player,
  machines,
  machine,
  seats,
  seat,

  // casinojam season commands
  season,
  organizer,

  // general commands
  help,
  welcome,
  whoami,
  transfer,
};
