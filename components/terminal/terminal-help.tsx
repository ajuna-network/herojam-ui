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
        "flex flex-col gap-2 bg-gray-800 rounded-md text-sm overflow-hidden relative",
        className
      )}
    >
      <div className="p-4 relative">
        <h2 className="text-lg font-bold mb-2">Available Commands</h2>
        <div className="flex flex-col gap-1">
          {Object.entries(commands).map(([command, commandInfo]) => (
            <div key={command}>
              <h3 className="text-md font-bold bg-cyan-500 px-1 py-0.5 rounded-sm inline-block">
                {command}
              </h3>
              <p className="text-sm inline-block">{commandInfo.help.command}</p>
              <p className="text-sm inline-block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
