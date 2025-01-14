"use client";

import { TxButton } from "@/components/ui/tx-button";
import { useChain } from "@/providers/chain-provider";
import { Binary } from "polkadot-api";

export function TxButtonContent() {
  const { ajuApi } = useChain();

  const transaction = ajuApi?.tx.System.remark({
    remark: Binary.fromText("Hello, world!"),
  });

  return <TxButton transaction={transaction} />;
}
