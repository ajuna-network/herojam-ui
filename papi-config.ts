"use client";

import { pas } from "@polkadot-api/descriptors";
import { createClient } from "polkadot-api";
import { getWsProvider } from "polkadot-api/ws-provider/web";
import { withPolkadotSdkCompat } from "polkadot-api/polkadot-sdk-compat";

export const wsProvider = getWsProvider("wss://rpc.ibp.network/paseo");
export const client = createClient(withPolkadotSdkCompat(wsProvider));
export const pasApi = client.getTypedApi(pas);
