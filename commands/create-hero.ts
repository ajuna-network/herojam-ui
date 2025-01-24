import { getChainState } from "@/store/chain-store";
import { getWalletState } from "@/store/wallet-store";
import type { Command } from "@/types/command";
import { Enum } from "polkadot-api";

export const createHero: Command = {
  execute: async () => {
    const { heroJamApi } = getChainState();
    const { activeSigner } = getWalletState();

    if (!heroJamApi) return "No chain connection available";
    if (!activeSigner) return "No active signer";

    const tx = await heroJamApi.tx.HeroJamSage.state_transition({
      transition_id: { type: "HeroJam", value: Enum("Create") },
      asset_ids: [],
      payment: undefined,
    });

    const result = await tx.signAndSubmit(activeSigner);

    console.log("Hero created", result);

    return result.toString();
  },
  help: "create hero - Create a new hero",
};
