"use client";

import { pas } from "@polkadot-api/descriptors";
import { createClient, PolkadotClient, TypedApi } from "polkadot-api";
import {
  getWsProvider,
  StatusChange,
  WsJsonRpcProvider,
} from "polkadot-api/ws-provider/web";
import { withPolkadotSdkCompat } from "polkadot-api/polkadot-sdk-compat";

import { createContext, useContext, useEffect, useRef, useState } from "react";

interface ChainProviderType {
  connectionStatus: StatusChange | undefined;
  pasApi: TypedApi<typeof pas> | null;
  wsProvider: WsJsonRpcProvider | null;
  client: PolkadotClient | null;
  switchRpc: () => void;
}

const ChainContext = createContext<ChainProviderType | undefined>(undefined);

export function ChainProvider({ children }: { children: React.ReactNode }) {
  const wsProviderRef = useRef<WsJsonRpcProvider | null>(null);
  const [client, setClient] = useState<PolkadotClient | null>(null);
  const [pasApi, setPasApi] = useState<TypedApi<typeof pas> | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<
    StatusChange | undefined
  >(undefined);

  const switchRpc = () => {
    if (!wsProviderRef.current) return;
    wsProviderRef.current.switch();
  };

  useEffect(() => {
    const _wsProvider = getWsProvider(
      ["wss://rpc.ibp.network/paseo", "wss://paseo.rpc.amforc.com"],
      setConnectionStatus
    );
    wsProviderRef.current = _wsProvider;

    console.log("wsProvider status", _wsProvider.switch);

    const client = createClient(withPolkadotSdkCompat(_wsProvider));
    const pasApi = client.getTypedApi(pas);

    setClient(client);
    setPasApi(pasApi);
  }, []);

  return (
    <ChainContext.Provider
      value={{
        connectionStatus,
        pasApi,
        wsProvider: wsProviderRef.current,
        client,
        switchRpc,
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
