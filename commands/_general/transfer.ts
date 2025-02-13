import { formatBalance } from "@/lib/format-balance";
import { Command } from "@/types/command";
import { MultiAddress } from "@polkadot-api/descriptors";

export const transfer: Command = {
  execute: async (
    args: string[],
    { activeSigner, selectedAccount, api, client }
  ) => {
    if (!api) return "No chain connection available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    const chainInfo = await client?.getChainSpecData();

    if (args.length !== 2) return "Invalid number of arguments (to, amount)";

    const [dest, rawAmount] = args;

    // Convert float string to chain units, handling decimals
    const decimals = chainInfo?.properties.tokenDecimals;
    const [whole, fraction = "0"] = rawAmount.split(".");
    const amount =
      BigInt(whole) * BigInt(10 ** decimals) +
      BigInt(fraction.padEnd(decimals, "0").slice(0, decimals));

    console.log("dest", dest);
    console.log("amount", amount);

    const tx = api.tx.Balances.transfer_keep_alive({
      dest: MultiAddress.Id(dest),
      value: BigInt(amount),
    });

    const result = await tx.signAndSubmit(activeSigner, { at: "best" });
    if (result.ok) {
      return `✅ Transferred ${amount} tokens (${formatBalance({
        value: amount,
        decimals: chainInfo?.properties.tokenDecimals,
        unit: chainInfo?.properties.tokenSymbol,
        options: {
          nDecimals: 4,
        },
      })}) to ${dest}`;
    } else {
      console.log("result", result);
      return `❌ Transfer failed`;
    }
  },
  help: "<span class='text-blue-500'>transfer [to] [amount]</span> - Transfer tokens to an address",
};
