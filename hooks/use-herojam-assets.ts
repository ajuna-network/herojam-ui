import { ajudev } from "@/.papi/descriptors/dist";
import { useChain } from "@/providers/chain-provider";
import { TypedApi } from "polkadot-api";
import { useState, useEffect } from "react";

export interface HeroJamAsset {
  id: number;
  owner: string;
  asset_type: string;
  asset_subtype: string;
  energy: number;
  fatigue: number;
  state_type: string;
  state_sub_type: number;
  state_sub_value: number;
  state_change_block_number: number;
  balance: number;
}

export function useHerojamAssets() {
  const { api, activeChain } = useChain();
  const [assets, setAssets] = useState<HeroJamAsset[] | undefined>(undefined);

  useEffect(() => {
    if (!api || !activeChain) {
      console.log("no api or active chain");
      return;
    }

    const heroJamApi: TypedApi<typeof ajudev> | undefined =
      activeChain?.key === "ajudev"
        ? (api as TypedApi<typeof ajudev>)
        : undefined;

    console.log("heroJamApi", heroJamApi);

    const subscription = heroJamApi?.query.HeroJamSage.Assets.watchEntries({
      at: "best",
    }).subscribe(({ entries }) => {
      const transformedAssets = entries.map((entry) => ({
        id: entry.value[1].value.id,
        owner: entry.value[0],
        asset_type: entry.value[1].value.asset_type.type,
        asset_subtype: entry.value[1].value.asset_subtype.type,
        energy: entry.value[1].value.energy,
        fatigue: entry.value[1].value.fatigue,
        state_type: entry.value[1].value.state_type.type,
        state_sub_type: entry.value[1].value.state_sub_type,
        state_sub_value: entry.value[1].value.state_sub_value,
        state_change_block_number:
          entry.value[1].value.state_change_block_number,
        balance: entry.value[1].value.balance,
      }));

      setAssets(transformedAssets);
    });

    return () => subscription?.unsubscribe();
  }, [api, activeChain]);

  return assets;
}
