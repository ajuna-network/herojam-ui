import { formatBalance } from "@/lib/format-balance";
import { getChainState } from "@/store/chain-store";
import { Command } from "@/types/command";

export const whoami: Command = {
  execute: async (_, { selectedAccount }) => {
    const { heroJamApi, client } = getChainState();

    if (!heroJamApi) return "No HeroJam API available";
    if (!selectedAccount?.address) return "No account selected";

    const accountInfo = await heroJamApi.query.System.Account.getValue(
      selectedAccount?.address,
      { at: "best" }
    );

    const chainInfo = await client?.getChainSpecData();

    console.log("accountInfo", accountInfo);

    return `
You are ${selectedAccount?.name}: ${selectedAccount?.address}
Balance: ${formatBalance({
      value: accountInfo?.data.free,
      decimals: chainInfo?.properties.tokenDecimals,
      unit: chainInfo?.properties.tokenSymbol,
      options: {
        nDecimals: 4,
      },
    })}
`;
  },
  help: "whoami - Display the current user with user info",
};
