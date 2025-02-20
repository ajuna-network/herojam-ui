import type { Command, CommandContext } from "@/types/command";
import { formatTransitionError, isCasinoJamApi } from "./util";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";
import { SeatType } from "./types";

export const DEFAULT_MULTIPLIER = "V1";

export const kick: Command = {
  execute: async (args: string[], context: CommandContext) => {
    const { api, activeSigner, selectedAccount } = context;

    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!activeSigner || !selectedAccount)
      return "Please connect and select an account first";

    if (args.length !== 2 && args.length !== 1) {
      return "Error: The syntax is 'rent [machine_id] or rent [machine_id] [multiplier]'";
    }

    const seatIdArg = args[0];

    // does the asset exist?
    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
    const seat = casinoJamAssets.find(
      ({ value: [, asset] }) =>
        asset.variant.type === "Seat" && asset.id === parseInt(seatIdArg)
    );

    if (!seat) {
      return "Error: Seat not found";
    }

    const playerOnSeatId = (seat.value[1].variant.value as SeatType).player_id;

    if (!playerOnSeatId) {
      return "Error: No player on seat";
    }

    // sniperId is the calling account's player id
    const sniperId = casinoJamAssets.find(
      ({ value: [owner] }) => owner === selectedAccount.address
    )?.value[1].id;

    if (!sniperId) {
      return "Error: Sniper not found";
    }

    // execute the call to SAGE
    const tx = await api.tx.CasinoJamSage.state_transition({
      transition_id: {
        type: "Kick",
        value: undefined,
      },
      asset_ids: [sniperId, playerOnSeatId, parseInt(seatIdArg)], // this is safe because we checked for existence above
      payment_kind: undefined,
    });

    const result = await tx.signAndSubmit(activeSigner, { at: "best" });
    console.info("result machine deposit", result);

    if (result.ok) {
      return `✅ Seat ${seatIdArg} kicked`;
    } else {
      const err = result.dispatchError.value as CasinojamDispatchError;
      return formatTransitionError(err);
    }
  },
  help: {
    command: "kick [seat_id]",
    description: "Kick the player from the seat with [seat_id]",
  },
};
