import { commands } from "@/commands";
import { AvailableApis } from "@/types";
import { PolkadotClient, PolkadotSigner } from "polkadot-api";
import { InjectedPolkadotAccount } from "polkadot-api/pjs-signer";

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
    const potentialCommand = Object.keys(commands).find(
      (cmd) => cmd === firstWord
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
    if (error instanceof Error) {
      console.error("Command execution error:", error);
      return `❌ Error: ${error.message}`;
    }

    console.error("Unknown command error:", error);
    return "❌ An unexpected error occurred";
  }
}
