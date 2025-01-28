import { displayHero } from "@/lib/display-hero";
import { getChainState } from "@/store/chain-store";
import { Command } from "@/types/command";
import { Enum } from "polkadot-api";

/**
 * Get all assets of AssetType.Hero
 */
export const hero: Command = {
  execute: async (args: string[], { activeSigner, selectedAccount }) => {
    const { heroJamApi } = getChainState();

    if (!heroJamApi) return "No chain connection available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";
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

    if (args.length === 1) {
      // Check if args[0] is a number
      if (!isNaN(Number(args[0]))) {
        const heroId = args[0];
        const hero = transformedHeroes.find(
          (hero) => hero.id === parseInt(heroId)
        );
        return hero ? displayHero(hero) : "Hero not found";
      } else if (args[0] === "create") {
        const tx = await heroJamApi.tx.HeroJamSage.state_transition({
          transition_id: { type: "HeroJam", value: Enum("Create") },
          asset_ids: [],
          payment: undefined,
        });

        const result = await tx.signAndSubmit(activeSigner, { at: "best" });
        console.log("result hero create", result);

        if (result.ok) {
          const heroes = await heroJamApi.query.HeroJamSage.Assets.getEntries({
            at: "best",
          });

          const transformedHeroes = heroes.map(
            ({ value: [owner, { value }] }) => ({
              id: value.id,
              balance: value.balance,
              fatigue: value.fatigue,
              energy: value.energy,
              asset_type: value.asset_type,
              asset_subtype: value.asset_subtype,
              owner,
            })
          );

          const hero = transformedHeroes.find(
            (hero) => hero.owner === selectedAccount?.address
          );

          return `✅ Hero created in: <a class="underline" href="https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer/query/${
            result.block.hash
          }">${result.block.hash}</a>
${hero ? displayHero(hero) : "Hero not found"}`;
        } else {
          return `❌ Hero creation failed in: <a class="underline" href="https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer/query/${result.block.hash}">${result.block.hash}</a>`;
        }
      }
      return "Invalid command. Use 'hero [id]' to view a hero or 'hero create' to create a new hero";
    } else if (args.length === 2) {
      const heroId = args[0];

      const action = args[1];

      console.log("action", action);

      const hero = transformedHeroes.find(
        (hero) => hero.id === parseInt(heroId)
      );

      if (!hero) return "Hero not found";

      if (action === "hunt") {
        const tx = heroJamApi.tx.HeroJamSage.state_transition({
          transition_id: {
            type: "HeroJam",
            value: Enum("Work", [Enum("Hunt"), Enum("Short")]),
          },
          asset_ids: [hero.id],
          payment: undefined,
        });

        const result = await tx.signAndSubmit(activeSigner, { at: "best" });
        if (result.ok) {
          return `✅ Hero ${hero.id} went hunting in: <a class="underline" href="https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer/query/${result.block.hash}">${result.block.hash}</a>`;
        } else {
          console.log("result", result);
          return `❌ Hero ${hero.id} failed hunting in: <a class="underline" href="https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer/query/${result.block.hash}">${result.block.hash}</a>`;
        }
      } else if (action === "train") {
        const tx = heroJamApi.tx.HeroJamSage.state_transition({
          transition_id: {
            type: "HeroJam",
            value: Enum("Work", [Enum("Train"), Enum("Short")]),
          },
          asset_ids: [hero.id],
          payment: undefined,
        });
        const result = await tx.signAndSubmit(activeSigner, { at: "best" });
        if (result.ok) {
          return `✅ Hero ${hero.id} went training in: <a class="underline" href="https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer/query/${result.block.hash}">${result.block.hash}</a>`;
        } else {
          console.log("result", result);
          return `❌ Hero ${hero.id} failed training in: <a class="underline" href="https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer/query/${result.block.hash}">${result.block.hash}</a>`;
        }
      } else {
        return `action ${action} not found`;
      }
    } else {
      return `
available actions:
hero create - <span class="text-blue-500">create a new hero</span>
hero [id] - <span class="text-blue-500">display a hero</span>
hero [id] hunt - <span class="text-blue-500">make a hero hunt</span>

available heroes:
${transformedHeroes.map((hero) => hero.id).join(", ")}`;
    }
  },
  help: "hero - Display a hero or take action on a hero",
};
