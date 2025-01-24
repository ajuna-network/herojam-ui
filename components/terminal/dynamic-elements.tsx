"use client";

import { useBlockNumber } from "@/hooks/use-block-number";
import { ChainInfo } from "../chain/chain-info";

export function DynamicElements() {
  const blockNumber = useBlockNumber();

  return (
    <div className="flex justify-between items-center text-xs text-gray-500 border-t border-green-700 pt-2 mt-2">
      <div>Block #{blockNumber}</div>
      <div className="flex items-center gap-2">
        Status
        <ChainInfo />
      </div>
    </div>
  );
}
