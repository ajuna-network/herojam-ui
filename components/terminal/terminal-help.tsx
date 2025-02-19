import { commands } from "@/commands";
import { cn } from "@/lib/utils";

/**
 * Component for displaying all available commands in the terminal
 * @returns
 */
export function TerminalHelp({ className }: { className?: string }) {
  const transitions = [
    commands.create.help,
    commands.deposit.help,
    commands.rent.help,
    commands.reserve.help,
    commands.gamble.help,
  ];

  const info = [
    commands.gambleInfo.help,
    commands.players.help,
    commands.player.help,
    commands.machines.help,
    commands.machine.help,
    commands.seats.help,
    commands.seat.help,
  ];

  const general = [
    commands.help.help,
    commands.welcome.help,
    commands.whoami.help,
    commands.transfer.help,
  ];

  return (
    <div
      className={cn(
        "flex flex-col gap-2 max-w-lg bg-gray-800/40 backdrop-blur-md rounded-md text-xs overflow-hidden relative max-h-[75vh] overflow-y-auto",
        className
      )}
    >
      <div className="p-4 relative">
        {[
          {
            title: "Transition Commands",
            commands: transitions,
            color: "green",
          },
          {
            title: "Info Commands ",
            commands: info,
            color: "blue",
          },
          {
            title: "General Commands",
            commands: general,
            color: "gray",
          },
        ].map(({ title, commands, color }) => (
          <div
            key={title}
            className={cn(
              "flex flex-col gap-1 mb-2 border p-1",
              color === "green" && "border-green-700",
              color === "blue" && "border-blue-700",
              color === "gray" && "border-gray-700"
            )}
          >
            <h3 className="font-bold mb-2 w-full text-center text-base">
              {title}
            </h3>
            {commands.map((commandInfo) => (
              <div key={commandInfo.command} className="flex flex-col mb-1">
                <h3
                  className={cn(
                    "font-bold bg-green-800 text-green-100 px-1 py-0.5 rounded-sm inline-block",
                    color === "green" && "bg-green-800 text-green-100",
                    color === "blue" && "bg-blue-800 text-blue-100",
                    color === "gray" && "bg-gray-800 text-gray-100"
                  )}
                >
                  {commandInfo.command}
                </h3>
                <p className="text-xs px-1 p-1">{commandInfo.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
