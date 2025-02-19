import type { Command, CommandContext } from "@/types/command";
import {
  formatTransitionError,
  isCasinoJamApi,
  validateTokenType,
} from "./util";
import { Enum } from "polkadot-api";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";

export const deposit: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    if (args.length !== 3) {
      return "Error: The syntax is 'deposit [player|machine] [id] [token_type]'";
    }

    const targetArg = args[0]?.toLowerCase();
    const idArg = args[1];
    const tokenTypeArg = args[2];

    if (targetArg !== "player" && targetArg !== "machine") {
      return "Error: Invalid target. Use 'player' or 'machine'";
    }

    // does the asset exist?
    let target;
    if (targetArg === "player") {
      const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
      const player = casinoJamAssets.find(
        ({ value: [, asset] }) =>
          asset.variant.type === "Player" &&
          asset.variant.value.type === "Human" &&
          asset.id === parseInt(idArg)
      );

      if (!player) {
        return "Error: Player not found";
      }

      target = Enum("Player");
    } else if (targetArg === "machine") {
      const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
      const machine = casinoJamAssets.find(
        ({ value: [, asset] }) =>
          asset.variant.type === "Machine" && asset.id === parseInt(idArg)
      );

      if (!machine) {
        return "Error: Machine not found";
      }

      target = Enum("Machine", { type: "Bandit", value: undefined });
    }

    // is the token type valid?
    const tokenType = validateTokenType(tokenTypeArg);

    // execute the call to SAGE
    const tx = await api.tx.CasinoJamSage.state_transition({
      transition_id: {
        type: "Deposit",
        value: [target, tokenType],
      },
      asset_ids: [parseInt(idArg)], // this is safe because we checked for existence above
      payment_kind: undefined,
    });

    const result = await tx.signAndSubmit(activeSigner, { at: "best" });
    console.info("result machine deposit", result);

    if (result.ok) {
      return `✅ Token ${tokenType.type} deposited to ${targetArg} ${idArg}`;
    } else {
      const err = result.dispatchError.value as CasinojamDispatchError;
      return formatTransitionError(err);
    }
  },
  help: {
    command: "deposit <player|machine> <id> <token_type>",
    description:
      "Deposit tokens of type <token_type> into the player or machine with id <id>",
  },
};
