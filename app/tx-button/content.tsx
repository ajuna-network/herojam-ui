"use client";

import { TxButton } from "@/components/ui/tx-button";
import { useChain } from "@/providers/chain-provider";
import { usePolkadotExtension } from "@/providers/polkadot-extension-provider";
import { Binary } from "polkadot-api";

export function TxButtonContent() {
  const { pasApi } = useChain();
  const { activeSigner } = usePolkadotExtension();

  if (!pasApi || !activeSigner) return null;

  const transaction = pasApi.tx.System.remark({
    remark: Binary.fromText("Hello, world!"),
  });

  return <TxButton transaction={transaction} />;
}
