"use client";

import { WalletSelect } from "@/components/account/wallet-select";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import Terminal from "@/components/terminal/terminal";
import { TerminalHelp } from "@/components/terminal/terminal-help";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isWideTerminal, setIsWideTerminal] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center p-4 dark:bg-gray-900 bg-green-100 pb-8 overflow-hidden relative">
      <div className="fixed top-0 right-4 p-4 z-20">
        <Button
          variant={isWideTerminal ? "outline" : "ghost"}
          size="icon"
          onClick={() => setIsWideTerminal(!isWideTerminal)}
        >
          <HelpCircle className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <ThemeToggle />
        <WalletSelect />
      </div>
      <div className="flex flex-col justify-center h-[80vh] max-w-4xl w-full mx-4 transition-all duration-500 ease-in-out">
        <Terminal
          className={cn(
            "w-full h-full transition-all duration-500 ease-in-out",
            isWideTerminal
              ? "lg:-translate-x-[5%] xl:-translate-x-[20%]"
              : "translate-x-0"
          )}
        />
      </div>
      <div
        className={cn(
          "overflow-y-auto absolute right-8 transition-all duration-300 ease-in-out max-w-[calc(100%-4rem)]",
          isWideTerminal ? "translate-x-0" : "translate-x-[200%]"
        )}
      >
        <TerminalHelp />
      </div>
    </main>
  );
}
