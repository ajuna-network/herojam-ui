import { ChainConfig } from "@/papi-config";
import type { InjectedPolkadotAccount } from "polkadot-api/pjs-signer";
import type { PolkadotSigner } from "polkadot-api";

interface WalletState {
  connectionStatus: string | undefined;
  selectedAccount: InjectedPolkadotAccount | null;
  selectedChain: ChainConfig | null;
  accounts: InjectedPolkadotAccount[];
  activeSigner: PolkadotSigner | null;
  selectedExtensionName: string | undefined;
}

let walletState: WalletState = {
  connectionStatus: undefined,
  selectedAccount: null,
  selectedChain: null,
  accounts: [],
  activeSigner: null,
  selectedExtensionName: undefined,
};

export function setWalletState(newState: Partial<WalletState>) {
  walletState = { ...walletState, ...newState };
}

export function getWalletState() {
  return walletState;
}
