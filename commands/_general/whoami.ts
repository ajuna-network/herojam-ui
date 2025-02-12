import { formatBalance } from "@/lib/format-balance";
import { Command } from "@/types/command";

export const whoami: Command = {
  execute: async (_, { selectedAccount, api, client }) => {
    if (!api) return "No  API available";
    if (!selectedAccount?.address) return "No account selected";

    const accountInfo = await api.query.System.Account.getValue(
      selectedAccount?.address,
      { at: "best" }
    );

    const chainInfo = await client?.getChainSpecData();

    console.log("chainInfo", client, chainInfo);

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
