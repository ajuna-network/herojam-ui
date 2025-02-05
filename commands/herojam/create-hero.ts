import { displayHero } from "@/lib/display-hero";
import { getChainState } from "@/store/chain-store";
import type { Command } from "@/types/command";
import { Enum } from "polkadot-api";

export const createHero: Command = {
  execute: async (_, { activeSigner, selectedAccount }) => {
    const { heroJamApi } = getChainState();

    if (!heroJamApi) return "No chain connection available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";
    const tx = await heroJamApi.tx.HeroJamSage.state_transition({
      transition_id: { type: "HeroJam", value: Enum("Create") },
      asset_ids: [],
      payment: undefined,
    });

    const result = await tx.signAndSubmit(activeSigner);

    console.log("Hero created", result);

    const heroes = await heroJamApi.query.HeroJamSage.Assets.getEntries({
      at: "best",
    });

    const transformedHeroes = heroes.map(({ value: [owner, { value }] }) => ({
      id: value.id,
      balance: value.balance,
      fatigue: value.fatigue,
      energy: value.energy,
      asset_type: value.asset_type,
      asset_subtype: value.asset_subtype,
      owner,
    }));

    const hero = transformedHeroes.find(
      (hero) => hero.owner === selectedAccount?.address
    );

    return hero ? displayHero(hero) : "Hero not found";
  },
  help: "create hero - Create a new hero",
};
