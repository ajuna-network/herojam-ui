"use client";

import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { HeroJamAsset } from "@/hooks/use-herojam-assets";
import { TxButton } from "../ui/tx-button";
import { useChain } from "@/providers/chain-provider";
import { ajudev } from "@/.papi/descriptors/dist";
import { Enum, TypedApi } from "polkadot-api";

export function HeroCard({ hero }: { hero: HeroJamAsset }) {
  const { api, activeChain } = useChain();

  const heroJamApi =
    activeChain?.key === "ajudev"
      ? (api as TypedApi<typeof ajudev>)
      : undefined;

  return (
    <div className="w-full max-w-md double-border p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary">HERO {hero.id}</h2>
          <p className="text-xs text-gray-400">Level 42 Warrior</p>
        </div>
      </div>

      <div className="text-xs">
        <p className="text-gray-400">OWNER</p>
        <p className="text-primary truncate">{hero.owner}</p>
      </div>

      <div className="relative h-48 double-border">
        <Image
          src="/hero-placeholder.webp"
          alt="Hero Avatar"
          className="rounded-sm"
          objectFit="cover"
          width={200}
          height={200}
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">BALANCE</span>
            <span className="text-primary">{hero.balance}/100</span>
          </div>
          <Progress
            value={hero.balance}
            className="h-2 rounded-sm border-2 border-primary/50"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">FATIGUE</span>
            <span className="text-primary">{hero.fatigue}/100</span>
          </div>
          <Progress
            value={hero.fatigue}
            className="h-2 rounded-sm border-2 border-primary/50"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">ENERGY</span>
            <span className="text-primary">{hero.energy}/100</span>
          </div>
          <Progress
            value={hero.energy}
            className="h-2 rounded-sm border-2 border-primary/50"
          />
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">BUSY UNTIL</span>
          <span className="text-primary">{hero.state_change_block_number}</span>
        </div>
      </div>

      <div className="pt-4 flex justify-between flex-col gap-2">
        <TxButton
          transaction={heroJamApi?.tx.HeroJamSage.state_transition({
            transition_id: {
              type: "HeroJam",
              value: Enum("Work", [Enum("Hunt"), Enum("Short")]),
            },
            asset_ids: [hero.id],
            payment: undefined,
          })}
        >
          🏹 Go Hunting
        </TxButton>
        <TxButton
          transaction={heroJamApi?.tx.HeroJamSage.state_transition({
            transition_id: {
              type: "HeroJam",
              value: Enum("Work", [Enum("Build"), Enum("Short")]),
            },
            asset_ids: [hero.id],
            payment: undefined,
          })}
        >
          🏠 Build tiny house
        </TxButton>
        <TxButton
          transaction={heroJamApi?.tx.HeroJamSage.state_transition({
            transition_id: {
              type: "HeroJam",
              value: Enum("Work", [Enum("Travel"), Enum("Short")]),
            },
            asset_ids: [hero.id],
            payment: undefined,
          })}
        >
          🚶‍♀️ Travel Short
        </TxButton>
      </div>
    </div>
  );
}
