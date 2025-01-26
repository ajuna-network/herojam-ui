import { displayHero } from "@/lib/display-hero";
import { getChainState } from "@/store/chain-store";
import { Command } from "@/types/command";

/**
 * Get all assets of AssetType.Hero
 */
export const heroes: Command = {
  execute: async (args: string[]) => {
    const { heroJamApi } = getChainState();

    if (!heroJamApi) return "No chain connection available";

    const heroes = await heroJamApi.query.HeroJamSage.Assets.getEntries({
      at: "best",
    });

    console.log("heroes", heroes);

    const transformedHeroes = heroes.map(({ value: [owner, { value }] }) => ({
      id: value.id,
      balance: value.balance,
      fatigue: value.fatigue,
      energy: value.energy,
      asset_type: value.asset_type,
      asset_subtype: value.asset_subtype,
      owner,
    }));

    if (args.length > 0) {
      const heroId = args[0];
      const hero = transformedHeroes.find(
        (hero) => hero.id === parseInt(heroId)
      );
      return hero ? displayHero(hero) : "Hero not found";
    }

    return `${heroes.length} Heroes: ${JSON.stringify(
      transformedHeroes,
      null,
      2
    )}`;
  },
  help: "heroes - Display the heroes",
};
