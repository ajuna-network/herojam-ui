"use client";

import { Binary, TypedApi } from "polkadot-api";
import { TxButton } from "../ui/tx-button";
import { useChain } from "@/providers/chain-provider";
import { useChainInfo } from "@/hooks/use-chain-info";
import { aju } from "@/.papi/descriptors/dist";

export function UserProfileActionButtons() {
  const { api, activeChain } = useChain();
  const { tokenDecimals } = useChainInfo();

  return (
    <>
      <TxButton
        transaction={api?.tx.System.remark({
          remark: Binary.fromText("Hello, HeroJam!"),
        })}
      >
        Remark &quot;Hello, HeroJam!&quot;
      </TxButton>
      <TxButton
        transaction={api?.tx.Balances.burn({
          value: BigInt(10 ** ((tokenDecimals || 18) - 5)),
          keep_alive: true,
        })}
      >
        Burn 0.0001 AJUN
      </TxButton>
      {activeChain?.key === "aju" && (
        <TxButton
          transaction={(
            api as TypedApi<typeof aju>
          )?.tx.AwesomeAvatars.claim_treasury({
            season_id: 1,
          })}
        >
          Awesome Avatars Claim Treasury Season 1
        </TxButton>
      )}
    </>
  );
}
