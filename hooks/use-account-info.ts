import { usePolkadotExtension } from "@/providers/polkadot-extension-provider";
import { useChain } from "@/providers/chain-provider";
import { useEffect, useState } from "react";
import { PasQueries } from "@polkadot-api/descriptors";

export function useAccountInfo() {
  const { selectedAccount } = usePolkadotExtension();
  const { api } = useChain();
  const [accountInfo, setAccountInfo] = useState<
    PasQueries["System"]["Account"]["Value"] | null
  >(null);

  useEffect(() => {
    if (!api || !selectedAccount?.address) return;

    const subscription = api.query.System.Account.watchValue(
      selectedAccount.address,
      "best"
    ).subscribe(setAccountInfo);

    return () => {
      subscription.unsubscribe();
      setAccountInfo(null);
    };
  }, [api, selectedAccount]);

  return accountInfo;
}
