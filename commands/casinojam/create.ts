import type { Command, CommandContext } from "@/types/command";
import { formatTransitionError } from "./util";
import { isCasinoJamApi } from "./util";
import { Enum } from "polkadot-api";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";

export const create: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    const subCommand = args[0]?.toLowerCase();

    if (!subCommand) {
      return "Error: Please specify 'player' or 'machine' as a subcommand";
    }

    switch (subCommand) {
      case "player": {
        const tx = await api.tx.CasinoJamSage.state_transition({
          transition_id: { type: "Create", value: Enum("Player") },
          asset_ids: [],
          payment_kind: undefined,
        });

        const result = await tx.signAndSubmit(activeSigner, { at: "best" });
        console.info("result player create", result);

        if (result.ok) {
          return "✅ Player created";
        } else {
          const err = result.dispatchError.value as CasinojamDispatchError;
          return formatTransitionError(err);
        }
      }
      case "machine": {
        const tx = await api.tx.CasinoJamSage.state_transition({
          transition_id: {
            type: "Create",
            value: Enum("Machine", { type: "Bandit", value: undefined }),
          },
          asset_ids: [],
          payment_kind: undefined,
        });

        const result = await tx.signAndSubmit(activeSigner, { at: "best" });
        console.info("result machine create", result);

        if (result.ok) {
          return "✅ Machine created";
        } else {
          const err = result.dispatchError.value as CasinojamDispatchError;
          return formatTransitionError(err);
        }
      }
      default:
        return "Error: Invalid subcommand. Use 'player' or 'machine'";
    }
  },
  help: {
    command: "create [player|machine]",
    description: "create a new player or machine asset",
  },
};
