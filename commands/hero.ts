import { getChainState } from "@/store/chain-store";
import { Command } from "@/types/command";

export const hero: Command = {
  execute: async () => {
    const { api, activeChain } = getChainState();

    if (!api || !activeChain) return "No chain connection available";

    return "hero";
  },
  help: "hero - Display the hero info",
};
