import {
  aju,
  AjuDispatchError,
  pas,
  PasDispatchError,
} from "@polkadot-api/descriptors";
import { createClient, TypedApi } from "polkadot-api";
import { withPolkadotSdkCompat } from "polkadot-api/polkadot-sdk-compat";
import { getWsProvider } from "polkadot-api/ws-provider/web";

export interface ChainConfig {
  chain: typeof aju | typeof pas;
  errorType?: AjuDispatchError | PasDispatchError;
  api: TypedApi<typeof aju | typeof pas>;
  blockExplorerUrl: string;
}

export const CHAIN_ENDPOINTS = process.env.NEXT_PUBLIC_CHAIN_ENDPOINTS
  ? JSON.parse(process.env.NEXT_PUBLIC_CHAIN_ENDPOINTS)
  : ["wss://rpc.ibp.network/paseo"];

export const wsProvider = getWsProvider(CHAIN_ENDPOINTS);
export const client = createClient(withPolkadotSdkCompat(wsProvider));

export const chainConfig: ChainConfig = {
  chain: aju,
  api: client.getTypedApi(pas),
  blockExplorerUrl: "https://ajuna.subscan.io",
};
