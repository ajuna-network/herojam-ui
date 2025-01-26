import { commands } from "@/commands";
import { PolkadotSigner } from "polkadot-api";
import { InjectedPolkadotAccount } from "polkadot-api/pjs-signer";

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

  if (trimmedInput in commands)
    return await commands[trimmedInput].execute([], {
      activeSigner,
      selectedAccount,
    });

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
}
