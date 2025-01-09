"use client";

import { useAccountInfo } from "@/hooks/use-account-info";
import { usePolkadotExtension } from "@/providers/polkadot-extension-provider";
import Identicon from "@polkadot/react-identicon";
import { Wallet } from "lucide-react";
import { formatBalance } from "../../lib/utils";
import { useChainInfo } from "@/hooks/use-chain-info";

export function UserInfo() {
  const { selectedAccount } = usePolkadotExtension();
  const accountInfo = useAccountInfo();
  const { tokenDecimals, tokenSymbol } = useChainInfo();

  if (!selectedAccount)
    return (
      <div className="items-center justify-center text-scenter">
        No account selected. Please login to your{" "}
        <Wallet className="inline w-5 h-5 mx-1" /> to continue.
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center">
      Logged in as
      <Identicon value={selectedAccount.address} size={32} theme="polkadot" />
      <div>{selectedAccount?.name}</div>
      <div className="text-xs flex flex-col">
        <div>
          Free Balance:{" "}
          {formatBalance({
            value: accountInfo?.data.free,
            decimals: tokenDecimals,
            unit: tokenSymbol,
          })}
        </div>
        <div>
          Reserved Balance:{" "}
          {formatBalance({
            value: accountInfo?.data.reserved,
            decimals: tokenDecimals,
            unit: tokenSymbol,
          })}
        </div>
        <div>
          Frozen Balance:{" "}
          {formatBalance({
            value: accountInfo?.data.frozen,
            decimals: tokenDecimals,
            unit: tokenSymbol,
          })}
        </div>
      </div>
    </div>
  );
}
