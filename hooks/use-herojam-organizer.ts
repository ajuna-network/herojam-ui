import { ajudev, AjudevQueries } from "@/.papi/descriptors/dist";
import { useChain } from "@/providers/chain-provider";
import { TypedApi } from "polkadot-api";
import { useState, useEffect } from "react";

export function useHerojamOrganizer() {
  const { api, activeChain } = useChain();
  const [organizer, setOrganizer] = useState<
    AjudevQueries["HeroJamSage"]["Organizer"]["Value"] | undefined
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

    const subscription = heroJamApi?.query.HeroJamSage.Organizer.watchValue(
      "best"
    ).subscribe((address) => {
      console.log("address", address);
      setOrganizer(address);
    });

    return () => subscription?.unsubscribe();
  }, [api, activeChain]);

  return organizer;
}
