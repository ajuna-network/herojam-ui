"use client";

import { pas } from "@polkadot-api/descriptors";
import { getWsProvider } from "@polkadot-api/ws-provider/web";
import { defineConfig } from "@reactive-dot/core";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";

export const config = defineConfig({
  chains: {
    paseo: {
      descriptor: pas,
      provider: getWsProvider("wss://rpc.ibp.network/paseo"),
    },
  },
  wallets: [new InjectedWalletProvider()],
});
