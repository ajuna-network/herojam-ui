import { Command, CommandContext } from "@/types";
import { Enum } from "polkadot-api";
import { formatTransitionError, isCasinoJamApi } from "../util";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";

export const createMachine: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    const tx = await api.tx.CasinoJamSage.state_transition({
      transition_id: {
        type: "Create",
        value: Enum("Machine", { type: "Bandit", value: undefined }),
      },
      asset_ids: [],
      payment_kind: undefined,
    });

    const result = await tx.signAndSubmit(activeSigner, { at: "best" });
    console.info("result player create", result);

    if (result.ok) {
      return "✅ Machine created";
    } else {
      const err = result.dispatchError.value as CasinojamDispatchError;
      return formatTransitionError(err);
    }
  },
  help: {
    command: "create player",
    description: "create a new player",
  },
};
