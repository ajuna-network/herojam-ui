"use client";

import { useChain } from "@/providers/chain-provider";
import { useEffect, useState } from "react";

interface ChainInfo {
  name: string;
  ss58Format: number;
  tokenDecimals: number;
  tokenSymbol: string;
  genesisHash: string;
}

export function useChainInfo() {
  const { client } = useChain();
  const [chainInfo, setChainInfo] = useState<ChainInfo>({
    name: "",
    ss58Format: 0,
    tokenDecimals: 0,
    tokenSymbol: "",
    genesisHash: "",
  });

  useEffect(() => {
    async function fetchChainInfo() {
      if (!client) return;
      const chainSpec = await client.getChainSpecData();
      setChainInfo({
        name: chainSpec.name,
        genesisHash: chainSpec.genesisHash,
        ss58Format: chainSpec.properties.ss58Format,
        tokenDecimals: chainSpec.properties.tokenDecimals,
        tokenSymbol: chainSpec.properties.tokenSymbol,
      });
    }
    fetchChainInfo();
  }, [client]);

  return chainInfo;
}
