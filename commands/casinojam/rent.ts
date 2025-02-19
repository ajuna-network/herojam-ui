import type { Command, CommandContext } from "@/types/command";
import {
  formatTransitionError,
  isCasinoJamApi,
  validateMultiplierType,
} from "./util";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";

export const DEFAULT_MULTIPLIER = "V1";

export const rent: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    if (args.length !== 2 && args.length !== 1) {
      return "Error: The syntax is 'rent [machine_id] or rent [machine_id] [multiplier]'";
    }

    const machineIdArg = args[0];
    const multiplierArg = args[1] ?? DEFAULT_MULTIPLIER;

    // does the asset exist?
    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
    const machine = casinoJamAssets.find(
      ({ value: [, asset] }) =>
        asset.variant.type === "Machine" && asset.id === parseInt(machineIdArg)
    );

    if (!machine) {
      return "Error: Machine not found";
    }

    // is the multiplier valid?
    const multiplier = validateMultiplierType(multiplierArg);

    // execute the call to SAGE
    const tx = await api.tx.CasinoJamSage.state_transition({
      transition_id: {
        type: "Rent",
        value: multiplier,
      },
      asset_ids: [parseInt(machineIdArg)], // this is safe because we checked for existence above
      payment_kind: undefined,
    });

    const result = await tx.signAndSubmit(activeSigner, { at: "best" });
    console.info("result machine deposit", result);

    if (result.ok) {
      return `✅ Machine ${machineIdArg} rented with multiplier ${multiplierArg}`;
    } else {
      const err = result.dispatchError.value as CasinojamDispatchError;
      return formatTransitionError(err);
    }
  },
  help: {
    command: "rent <machine_id> (<multiplier>)",
    description:
      "Rent a machine with id <machine_id> (with a multiplier of <multiplier>)",
  },
};
