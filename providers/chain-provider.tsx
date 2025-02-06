"use client";

import { createClient, PolkadotClient } from "polkadot-api";
import {
  getWsProvider,
  StatusChange,
  WsJsonRpcProvider,
} from "polkadot-api/ws-provider/web";
import { withPolkadotSdkCompat } from "polkadot-api/polkadot-sdk-compat";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { chainConfig, ChainConfig } from "@/papi-config";
import { AvailableApis } from "@/types";

interface ChainProviderType {
  connectionStatus: StatusChange | undefined;
  activeChain: ChainConfig | null;
  setActiveChain: (chain: ChainConfig) => void;
  client: PolkadotClient | null;
  wsProvider: WsJsonRpcProvider | null;
  api: AvailableApis | null;
}

const ChainContext = createContext<ChainProviderType | undefined>(undefined);

export function ChainProvider({ children }: { children: React.ReactNode }) {
  const wsProviderRef = useRef<WsJsonRpcProvider | null>(null);
  const [activeChain, setActiveChain] = useState<ChainConfig | null>(
    chainConfig[0]
  );
  const [activeApi, setActiveApi] = useState<AvailableApis | null>(null);
  const clientRef = useRef<PolkadotClient | null>(null);

  const [connectionStatus, setConnectionStatus] = useState<
    StatusChange | undefined
  >(undefined);

  useEffect(() => {
    if (!activeChain) {
      console.error(
        "Error: No active chain. Please set one in your `/papi-config.ts` file."
      );
      return;
    }

    console.log("Switching chain to", activeChain.name);

    try {
      const _wsProvider = getWsProvider(
        activeChain.endpoints,
        setConnectionStatus
      );

      wsProviderRef.current = _wsProvider;

      const client = createClient(withPolkadotSdkCompat(_wsProvider));
      const api = client.getTypedApi(activeChain.descriptors);

      clientRef.current = client;
      setActiveApi(api);
    } catch (error) {
      console.error("Error connecting to chain", error);
    }
  }, [activeChain]);

  return (
    <ChainContext.Provider
      value={{
        connectionStatus,
        api: activeApi,
        wsProvider: wsProviderRef.current,
        client: clientRef.current,
        activeChain,
        setActiveChain,
      }}
    >
      {children}
    </ChainContext.Provider>
  );
}

export function useChain() {
  const context = useContext(ChainContext);
  if (!context) {
    throw new Error("useChain must be used within a ChainProvider");
  }
  return context;
}
