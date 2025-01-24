import { commands } from "@/commands";

export async function executeCommand(input: string): Promise<string> {
  const trimmedInput = input.trim();

  if (trimmedInput in commands) return await commands[trimmedInput].execute([]);

  const [firstWord, ...args] = trimmedInput.split(" ");
  const potentialCommand = Object.keys(commands).find((cmd) =>
    cmd.startsWith(firstWord)
  );

  if (potentialCommand && trimmedInput.startsWith(potentialCommand)) {
    return await commands[potentialCommand].execute(args);
  }

  return `Command not found: ${firstWord}`;
}
