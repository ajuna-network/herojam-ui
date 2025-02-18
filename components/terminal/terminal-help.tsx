import { commands } from "@/commands";
import { cn } from "@/lib/utils";

/**
 * Component for displaying all available commands in the terminal
 * @returns
 */
export function TerminalHelp({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-4 bg-gray-800 rounded-md text-sm",
        className
      )}
    >
      <h2 className="text-lg font-bold">Available Commands</h2>
      <div className="flex flex-col gap-1">
        {Object.entries(commands).map(([command, commandInfo]) => (
          <div key={command}>
            <h3 className="text-md font-bold">{command}</h3>
            <p className="text-sm">{commandInfo.help}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
