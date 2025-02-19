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
        "flex flex-col gap-2 max-w-lg bg-gray-800/40 backdrop-blur-md rounded-md text-xs overflow-hidden relative max-h-[75vh] overflow-y-auto",
        className
      )}
    >
      <div className="p-4 relative">
        <h2 className="text-lg font-bold mb-2">Available Commands</h2>
        <div className="flex flex-col gap-1">
          {Object.entries(commands).map(([command, commandInfo]) => (
            <div
              key={command}
              className="flex flex-col border border-green-700 mb-1"
            >
              <h3 className="font-bold bg-green-800 text-green-100 px-1 py-0.5 rounded-sm inline-block">
                {commandInfo.help.command}
              </h3>
              <p className="text-xs px-1 p-1">{commandInfo.help.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
