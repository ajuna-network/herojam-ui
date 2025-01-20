import { ajudev, AjudevQueries } from "@/.papi/descriptors/dist";
import { useChain } from "@/providers/chain-provider";
import { TypedApi } from "polkadot-api";
import { useState, useEffect } from "react";

export function useHerojamAssets() {
  const { api, activeChain } = useChain();
  const [assets, setAssets] = useState<
    | Array<{
        args: AjudevQueries["HeroJamSage"]["Assets"]["KeyArgs"];
        value: AjudevQueries["HeroJamSage"]["Assets"]["Value"];
      }>
    | undefined
  >(undefined);

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
      console.log("entries", entries);
      setAssets(entries);
    });

    return () => subscription?.unsubscribe();
  }, [api, activeChain]);

  return assets;
}
