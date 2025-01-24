import { commands } from "@/commands";

export function executeCommand(input: string): string {
  const trimmedInput = input.trim();

  if (trimmedInput in commands) return commands[trimmedInput].execute([]);

  const [firstWord] = trimmedInput.split(" ");
  const potentialCommand = Object.keys(commands).find((cmd) =>
    cmd.startsWith(firstWord)
  );

  if (potentialCommand && trimmedInput.startsWith(potentialCommand)) {
    const args = trimmedInput.slice(potentialCommand.length).trim().split(" ");
    return commands[potentialCommand].execute(args);
  }

  return `Command not found: ${firstWord}`;
}
