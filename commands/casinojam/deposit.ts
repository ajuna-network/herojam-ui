import type { Command, CommandContext } from "@/types/command";

export const deposit: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, client, activeSigner, selectedAccount } = context;

    if (!api || !client || !activeSigner || !selectedAccount) {
      return "Error: API, client, activeSigner, or selectedAccount is not available";
    }

    const amount = args[0] ? args[0] : "1000000000000000000";

    const tx = await api.tx.balances.transfer(selectedAccount.address, amount);
    const hash = await tx.signAndSend(activeSigner);

    return `Deposited ${amount} into ${selectedAccount.address}. Tx: ${hash}`;
  },
  help: {
    command: "deposit <player|machine> <id> <token_type>",
    description:
      "Deposit tokens of type <token_type> into the player or machine with id <id>",
  },
};
