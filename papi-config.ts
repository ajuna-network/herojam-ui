"use client";

import { aju, ajudev, casinojam, pas } from "@polkadot-api/descriptors";

// import { pas } from "@polkadot-api/descriptors";
// import { createClient } from "polkadot-api";
// import { getWsProvider } from "polkadot-api/ws-provider/web";
// import { withPolkadotSdkCompat } from "polkadot-api/polkadot-sdk-compat";

// export const wsProvider = getWsProvider("wss://rpc.ibp.network/paseo");
// export const client = createClient(withPolkadotSdkCompat(wsProvider));
// export const pasApi = client.getTypedApi(pas);

export interface ChainConfig {
  key: string;
  name: string;
  descriptors: typeof aju | typeof ajudev | typeof pas | typeof casinojam;
  endpoints: string[];
  explorerUrl?: string;
}

export const chainConfig: ChainConfig[] = [
  {
    key: "casinojam",
    name: "CasinoJam",
    descriptors: casinojam,
    endpoints: ["ws://127.0.0.1:9944"],
  },
  {
    key: "ajudev",
    name: "Ajuna Devnet (Local)",
    descriptors: ajudev,
    endpoints: ["ws://127.0.0.1:9944"],
  },
  {
    key: "aju",
    name: "Ajuna",
    descriptors: aju,
    endpoints: ["wss://ajuna.ibp.network", "wss://rpc-para.ajuna.network"],
  },
  {
    key: "pas",
    name: "Paseo",
    descriptors: pas,
    endpoints: ["wss://rpc.ibp.network/paseo"],
  },
];
