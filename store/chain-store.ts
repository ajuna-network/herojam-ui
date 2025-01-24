import { ChainConfig } from "@/papi-config";
import { PolkadotClient, TypedApi } from "polkadot-api";
import { WsJsonRpcProvider } from "polkadot-api/ws-provider/web";
import { aju, ajudev, pas } from "@polkadot-api/descriptors";

interface ChainState {
  connectionStatus: string | undefined;
  activeChain: ChainConfig | null;
  client: PolkadotClient | null;
  wsProvider: WsJsonRpcProvider | null;
  api: TypedApi<typeof aju | typeof pas | typeof ajudev> | null;
  heroJamApi: TypedApi<typeof ajudev> | null;
}

let chainState: ChainState = {
  connectionStatus: undefined,
  activeChain: null,
  client: null,
  wsProvider: null,
  api: null,
  heroJamApi: null,
};

export function setChainState(newState: Partial<ChainState>) {
  chainState = { ...chainState, ...newState };
}

export function getChainState() {
  return chainState;
}
