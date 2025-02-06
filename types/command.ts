import type { InjectedPolkadotAccount } from "polkadot-api/pjs-signer";
import type { PolkadotClient, PolkadotSigner, TypedApi } from "polkadot-api";
import { aju, ajudev, pas, casinojam, wnd } from "@polkadot-api/descriptors";

export interface CommandContext {
  activeSigner?: PolkadotSigner | null;
  selectedAccount?: InjectedPolkadotAccount | null;
  onProcessing?: (output: string) => void;
  api?: TypedApi<
    typeof aju | typeof pas | typeof ajudev | typeof casinojam | typeof wnd
  > | null;
  client?: PolkadotClient | null;
}

export interface Command {
  execute: (args: string[], context: CommandContext) => Promise<string>;
  help: string;
}
