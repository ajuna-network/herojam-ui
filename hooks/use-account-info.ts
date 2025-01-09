import { usePolkadotExtension } from "@/providers/polkadot-extension-provider";
import { useChain } from "@/providers/chain-provider";
import { useEffect, useState } from "react";

interface AccountInfoData {
  nonce: number;
  consumers: number;
  providers: number;
  data: {
    free: bigint;
    reserved: bigint;
    frozen: bigint;
  };
}

export function useAccountInfo() {
  const { selectedAccount } = usePolkadotExtension();
  const { pasApi } = useChain();
  const [accountInfo, setAccountInfo] = useState<AccountInfoData | null>(null);

  useEffect(() => {
    async function fetchAccountInfo() {
      if (!pasApi || !selectedAccount) return;
      const accountInfo = await pasApi?.query.System.Account.getValue(
        selectedAccount?.address
      );
      setAccountInfo(accountInfo);
    }

    fetchAccountInfo();
  }, [pasApi, selectedAccount]);

  return accountInfo;
}
