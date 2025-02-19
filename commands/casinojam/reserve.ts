import type { Command, CommandContext } from "@/types/command";
import {
  formatTransitionError,
  isCasinoJamApi,
  validateMultiplierType,
} from "./util";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";

export const DEFAULT_MULTIPLIER = "V1";

export const reserve: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    if (args.length !== 2 && args.length !== 1) {
      return "Error: The syntax is 'reserve [machine_id] or reserve [machine_id] [multiplier]'";
    }

    const machineIdArg = args[0];
    const multiplierArg = args[1] ?? DEFAULT_MULTIPLIER;

    // is the multiplier valid?
    const multiplier = validateMultiplierType(multiplierArg);

    // does the asset exist?
    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
    const machine = casinoJamAssets.find(
      ({ value: [, asset] }) =>
        asset.variant.type === "Machine" && asset.id === parseInt(machineIdArg)
    );

    if (!machine) {
      return "Error: Machine not found";
    }

    // does the player exist?
    const playerMeId = casinoJamAssets.find(
      ({ value: [owner, asset] }) =>
        asset.variant.type === "Player" &&
        asset.variant.value.type === "Human" &&
        owner === selectedAccount.address
    )?.value[1].id;

    if (!playerMeId) {
      return "Error: Player not found";
    }

    // does a free seat exist?
    const freeSeats = casinoJamAssets.filter(
      ({ value: [, asset] }) =>
        asset.variant.type === "Seat" &&
        asset.variant.value.machine_id === machine.value[1].id &&
        asset.variant.value.player_id === undefined
    );

    if (freeSeats.length === 0) {
      return "Error: No free seats found";
    }

    const seatToReserveId = freeSeats[0].value[1].id;

    console.info(
      `reserving seat ${seatToReserveId} for player ${playerMeId} on machine ${machineIdArg}`
    );

    const tx = await api.tx.CasinoJamSage.state_transition({
      transition_id: {
        type: "Reserve",
        value: multiplier,
      },
      asset_ids: [playerMeId, seatToReserveId],
      payment_kind: undefined,
    });

    const result = await tx.signAndSubmit(activeSigner, { at: "best" });

    if (result.ok) {
      return `✅ Seat ${seatToReserveId} reserved for player ${playerMeId} on machine ${machineIdArg}`;
    } else {
      const err = result.dispatchError.value as CasinojamDispatchError;
      return formatTransitionError(err);
    }
    // // is the multiplier valid?
    // const multiplier = validateMultiplierType(multiplierArg);

    // // execute the call to SAGE
    // const tx = await api.tx.CasinoJamSage.state_transition({
    //   transition_id: {
    //     type: "Rent",
    //     value: multiplier,
    //   },
    //   asset_ids: [parseInt(machineIdArg)], // this is safe because we checked for existence above
    //   payment_kind: undefined,
    // });

    // const result = await tx.signAndSubmit(activeSigner, { at: "best" });
    // console.info("result machine deposit", result);

    // if (result.ok) {
    //   return `✅ Machine ${machineIdArg} rented with multiplier ${multiplierArg}`;
    // } else {
    //   const err = result.dispatchError.value as CasinojamDispatchError;
    //   return formatTransitionError(err);
    // }
  },
  help: {
    command: "reserve <machine_id> (<multiplier>)",
    description:
      "Reserve a seat on a machine with id <machine_id> (with a multiplier of <multiplier>)",
  },
};
