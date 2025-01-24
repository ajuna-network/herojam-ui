export interface Command {
  execute: (args: string[]) => Promise<string> | string;
  help: string;
}
