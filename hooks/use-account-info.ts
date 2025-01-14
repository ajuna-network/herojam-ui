import { usePolkadotExtension } from "@/providers/polkadot-extension-provider";
import { useChain } from "@/providers/chain-provider";
import { useEffect, useState } from "react";
import { PasQueries } from "@polkadot-api/descriptors";

export function useAccountInfo() {
  const { selectedAccount } = usePolkadotExtension();
  const { ajuApi } = useChain();
  const [accountInfo, setAccountInfo] = useState<
    PasQueries["System"]["Account"]["Value"] | null
  >(null);

  useEffect(() => {
    async function fetchAccountInfo() {
      if (!ajuApi || !selectedAccount) return;

      const subscription = ajuApi?.query.System.Account.watchValue(
        selectedAccount?.address,
        "best"
      ).subscribe((value) => {
        setAccountInfo(value);
      });

      return () => subscription?.unsubscribe();
    }

    fetchAccountInfo();
  }, [ajuApi, selectedAccount]);

  return accountInfo;
}
