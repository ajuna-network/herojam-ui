import { getChainState } from "@/store/chain-store";
import { getWalletState } from "@/store/wallet-store";
import { Command } from "@/types/command";

export const whoami: Command = {
  execute: async () => {
    const { heroJamApi } = getChainState();
    const { selectedAccount } = getWalletState();

    if (!heroJamApi) return "No HeroJam API available";

    return `You are ${selectedAccount?.name}: ${selectedAccount?.address}`;
  },
  help: "whoami - Display the current user with user info",
};
