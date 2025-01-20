"use client";

import { HeroCard } from "@/components/hero/hero-card";
import { HeroJamAsset, useHerojamAssets } from "@/hooks/use-herojam-assets";

export function HeroGrid() {
  const heroes = useHerojamAssets();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {heroes?.map((hero: HeroJamAsset) => (
        <HeroCard hero={hero} key={hero.id} />
      ))}
    </div>
  );
}
