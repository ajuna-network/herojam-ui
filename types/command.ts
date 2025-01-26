import { PolkadotSigner } from "polkadot-api";
import { InjectedPolkadotAccount } from "polkadot-api/pjs-signer";

export interface Command {
  execute: (
    args: string[],
    {
      activeSigner,
      selectedAccount,
    }: {
      activeSigner: PolkadotSigner | null;
      selectedAccount: InjectedPolkadotAccount | null;
    }
  ) => Promise<string> | string;
  help: string;
}
