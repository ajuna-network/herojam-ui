import { commands } from "@/commands";
import { AvailableApis } from "@/types";
import { PolkadotClient, PolkadotSigner } from "polkadot-api";
import { InjectedPolkadotAccount } from "polkadot-api/pjs-signer";

interface ChainError {
  type: string;
  value?: {
    type: string;
  };
}

export async function executeCommand(
  input: string,
  {
    activeSigner,
    selectedAccount,
    onProcessing,
    api,
    client,
  }: {
    activeSigner: PolkadotSigner | null;
    selectedAccount: InjectedPolkadotAccount | null;
    onProcessing?: (output: string) => void;
    api?: AvailableApis | null;
    client?: PolkadotClient | null;
  } = {
    activeSigner: null,
    selectedAccount: null,
    onProcessing: undefined,
  }
): Promise<string> {
  const trimmedInput = input.trim();

  console.log("execute command api", api);

  try {
    if (trimmedInput in commands) {
      return await commands[trimmedInput].execute([], {
        activeSigner,
        selectedAccount,
        onProcessing,
        api,
        client,
      });
    }

    const [firstWord, ...args] = trimmedInput.split(" ");
    const potentialCommand = Object.keys(commands).find((cmd) =>
      cmd.startsWith(firstWord)
    );

    if (potentialCommand && trimmedInput.startsWith(potentialCommand)) {
      return await commands[potentialCommand].execute(args, {
        activeSigner,
        selectedAccount,
        onProcessing,
        api,
        client,
      });
    }

    return `Command not found: ${firstWord}`;
  } catch (error) {
    const chainError = error as ChainError;

    if (chainError.type === "System") {
      switch (chainError.value?.type) {
        case "CallFiltered":
          return "❌ Error: This call is not allowed";
        case "MultiBlockMigrationsOngoing":
          return "❌ Error: System is currently upgrading";
        default:
          return `❌ System Error: ${
            chainError.value?.type || "Unknown error"
          }`;
      }
    }

    if (chainError.type === "HeroJamSeasons") {
      switch (chainError.value?.type) {
        case "NoActiveSeason":
          return "❌ Error: No active season";
        case "InvalidSeasonData":
          return "❌ Error: Invalid season data";
        default:
          return `❌ HeroJam Error: ${
            chainError.value?.type || "Unknown error"
          }`;
      }
    }

    if (error instanceof Error) {
      // console.error("Command execution error:", error);
      return `❌ Error: ${error.message}`;
    }

    console.error("Unknown command error:", error);
    return "❌ An unexpected error occurred";
  }
}
