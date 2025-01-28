import { commands } from "@/commands";
import { PolkadotSigner } from "polkadot-api";
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
  }: {
    activeSigner: PolkadotSigner | null;
    selectedAccount: InjectedPolkadotAccount | null;
  } = {
    activeSigner: null,
    selectedAccount: null,
  }
): Promise<string> {
  const trimmedInput = input.trim();

  try {
    if (trimmedInput in commands) {
      return await commands[trimmedInput].execute([], {
        activeSigner,
        selectedAccount,
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
