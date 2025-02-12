import { Command } from "@/types/command";
import {
  displayMachine,
  formatTransitionError,
  isCasinoJamApi,
  MULTIPLIER_VALUES,
  TOKEN_TYPE_VALUES,
} from "./util";
import { Enum } from "polkadot-api";
import {
  AssetType,
  MachineUI,
  MultiplierType,
  MultiplierValuesType,
  TokenType,
  TokenValuesType,
} from "./types";
import { MachineType } from "./types";
import { CasinojamDispatchError } from "@polkadot-api/descriptors";

const subCommands = `<span class="text-blue-500">machine create</span> - create a new machine
<span class="text-blue-500">machine [id]</span> - display a machine
<span class="text-blue-500">machine [id] rent [multiplier]</span> - rent a machine
<span class="text-blue-500">machine [id] deposit [token_type]</span> - deposit a token to a machine`;

function isMachineAsset(asset: AssetType): asset is AssetType & {
  variant: {
    type: "Machine";
    value: MachineType;
  };
} {
  return (
    asset.variant.type === "Machine" &&
    "value" in asset.variant &&
    "value_1_factor" in asset.variant.value
  );
}

function isSeatAsset(asset: AssetType): asset is AssetType & {
  variant: {
    type: "Seat";
  };
} {
  return asset.variant.type === "Seat";
}

/**
 * Get all assets of AssetType.Machine
 */
export const machine: Command = {
  execute: async (args: string[], { activeSigner, selectedAccount, api }) => {
    if (!api || !isCasinoJamApi(api)) return "No CasinoJam API available";
    if (!activeSigner) return "No active signer";
    if (!selectedAccount) return "No selected account";

    const casinoJamAssets = await api.query.CasinoJamSage.Assets.getEntries();
    const machines = casinoJamAssets.filter(
      (
        entry
      ): entry is (typeof casinoJamAssets)[number] & {
        value: [
          string,
          AssetType & {
            variant: {
              type: "Machine";
              value: MachineType;
            };
          }
        ];
      } => {
        const [, assetData] = entry.value;
        return isMachineAsset(assetData);
      }
    );
    const seats = casinoJamAssets.filter(
      (
        entry
      ): entry is (typeof casinoJamAssets)[number] & {
        value: [
          string,
          AssetType & {
            variant: {
              type: "Seat";
            };
          }
        ];
      } => {
        const [, assetData] = entry.value;
        return isSeatAsset(assetData);
      }
    );

    console.log("machines", machines);

    const uiMachines: MachineUI[] = machines.map(
      ({ value: [machineOwner, machineAsset] }) => ({
        id: machineAsset.id,
        genesis: machineAsset.genesis,
        owner: machineOwner,
        seat_limit: machineAsset.variant.value.seat_limit,
        seat_linked: machineAsset.variant.value.seat_linked,
        value_1_factor: machineAsset.variant.value.value_1_factor.type,
        value_2_factor: machineAsset.variant.value.value_2_factor.type,
        value_3_factor: machineAsset.variant.value.value_3_factor.type,
        value_1_mul: machineAsset.variant.value.value_1_mul.type,
        value_2_mul: machineAsset.variant.value.value_2_mul.type,
        value_3_mul: machineAsset.variant.value.value_3_mul.type,
        sub_variant: machineAsset.variant.value.sub_variant,
        seats: seats
          .filter((seat) => seat.value[0] === machineOwner)
          .map((seat) => seat.value[1].id),
      })
    );

    if (args.length === 1) {
      // COMMAND: machine [id]
      if (!isNaN(Number(args[0]))) {
        const machineId = args[0];
        const machine = uiMachines.find(
          (machine) => machine.id === parseInt(machineId)
        );

        if (machine) {
          const assetFundsEntries =
            await api.query.CasinoJamSage.AssetFunds.getEntries(machine.id);

          return displayMachine({
            ...machine,
            funds: assetFundsEntries?.[0]?.value ?? 0,
          });
        }

        return "Machine not found";
      } else if (args[0] === "create") {
        // COMMAND: machine create
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
      }

      return (
        "Invalid command: " +
        args[0] +
        "\navailable commands:\n\n" +
        subCommands
      );
    } else if (args.length > 1) {
      // COMMAND: machine [id] [action] [args]
      const machineId = args[0];
      const action = args[1];
      const subCommandArgs = args.slice(2);

      console.log("action", machineId, action, subCommandArgs);

      const machine = uiMachines.find(
        (machine) => machine.id === parseInt(machineId)
      );

      if (!machine) {
        return "Machine not found";
      }

      // COMMAND: machine [id] rent [multiplier]
      if (action === "rent") {
        if (subCommandArgs.length !== 1) {
          return "Invalid command. Use 'machine [id] rent [multiplier]' to rent a seat on a machine";
        }

        const multiplierArg = subCommandArgs[0].toUpperCase();

        if (
          !MULTIPLIER_VALUES.includes(multiplierArg as MultiplierValuesType)
        ) {
          return `Invalid multiplier. Valid values are: ${MULTIPLIER_VALUES.join(
            ", "
          )}`;
        }

        const multiplier: MultiplierType = Enum(
          multiplierArg as MultiplierValuesType
        );

        const tx = await api.tx.CasinoJamSage.state_transition({
          transition_id: {
            type: "Rent",
            value: multiplier,
          },
          asset_ids: [machine.id],
          payment_kind: undefined,
        });

        const result = await tx.signAndSubmit(activeSigner, { at: "best" });
        console.info("result machine rent", result);

        if (result.ok) {
          return "✅ Machine rented";
        } else {
          const err = result.dispatchError.value as CasinojamDispatchError;
          return formatTransitionError(err);
        }
      } else if (action === "deposit") {
        // COMMAND: machine [id] deposit [token_type]
        if (subCommandArgs.length !== 1) {
          return "Invalid command. Use 'machine [id] fund [token_type]' to fund a machine";
        }

        const tokenTypeArg = subCommandArgs[0];

        if (!TOKEN_TYPE_VALUES.includes(tokenTypeArg as TokenValuesType)) {
          return `Invalid token type. Valid values are: ${TOKEN_TYPE_VALUES.join(
            ", "
          )}`;
        }

        const tokenType: TokenType = Enum(tokenTypeArg as TokenValuesType);

        const tx = await api.tx.CasinoJamSage.state_transition({
          transition_id: {
            type: "Deposit",
            value: [
              Enum("Machine", { type: "Bandit", value: undefined }),
              tokenType,
            ],
          },
          asset_ids: [machine.id],
          payment_kind: undefined,
        });

        const result = await tx.signAndSubmit(activeSigner, { at: "best" });
        console.info("result machine deposit", result);

        if (result.ok) {
          return "✅ Machine funded";
        } else {
          const err = result.dispatchError.value as CasinojamDispatchError;
          return formatTransitionError(err);
        }
      } else {
        return `Invalid action ${action}. Available actions: rent, deposit`;
      }
    } else {
      return `
available actions:
${subCommands}

available machines:
${uiMachines.map((machine) => machine.id).join(", ")}`;
    }
  },
  help:
    "machine - Display a machine or take action on a machine\n" + subCommands,
};
