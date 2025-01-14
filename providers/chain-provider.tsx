"use client";

import { aju, pas } from "@polkadot-api/descriptors";
import { createClient, PolkadotClient, TypedApi } from "polkadot-api";
import {
  getWsProvider,
  StatusChange,
  WsJsonRpcProvider,
} from "polkadot-api/ws-provider/web";
import { withPolkadotSdkCompat } from "polkadot-api/polkadot-sdk-compat";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { CHAIN_ENDPOINTS } from "@/config";

interface ChainProviderType {
  connectionStatus: StatusChange | undefined;
  pasApi: TypedApi<typeof pas> | null;
  ajuApi: TypedApi<typeof aju> | null;
  wsProvider: WsJsonRpcProvider | null;
  client: PolkadotClient | null;
}

const ChainContext = createContext<ChainProviderType | undefined>(undefined);

export function ChainProvider({ children }: { children: React.ReactNode }) {
  const wsProviderRef = useRef<WsJsonRpcProvider | null>(null);
  const [client, setClient] = useState<PolkadotClient | null>(null);
  const [pasApi, setPasApi] = useState<TypedApi<typeof pas> | null>(null);
  const [ajuApi, setAjuApi] = useState<TypedApi<typeof aju> | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<
    StatusChange | undefined
  >(undefined);

  useEffect(() => {
    const _wsProvider = getWsProvider(CHAIN_ENDPOINTS, setConnectionStatus);
    wsProviderRef.current = _wsProvider;

    const client = createClient(withPolkadotSdkCompat(_wsProvider));
    const pasApi = client.getTypedApi(pas);
    const ajuApi = client.getTypedApi(aju);

    setClient(client);
    setPasApi(pasApi);
    setAjuApi(ajuApi);
  }, []);

  return (
    <ChainContext.Provider
      value={{
        connectionStatus,
        pasApi,
        ajuApi,
        wsProvider: wsProviderRef.current,
        client,
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
