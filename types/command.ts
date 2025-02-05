import type { InjectedPolkadotAccount } from "polkadot-api/pjs-signer";
import type { PolkadotSigner } from "polkadot-api";

export interface CommandContext {
  activeSigner?: PolkadotSigner | null;
  selectedAccount?: InjectedPolkadotAccount | null;
  onProcessing?: (output: string) => void;
}

export interface Command {
  execute: (args: string[], context: CommandContext) => Promise<string>;
  help: string;
}
