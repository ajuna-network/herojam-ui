"use client";

import { WalletSelect } from "@/components/account/wallet-select";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import Terminal from "@/components/terminal/terminal";
import { TerminalHelp } from "@/components/terminal/terminal-help";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isWideTerminal, setIsWideTerminal] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center p-4 dark:bg-gray-900 bg-green-100 pb-8">
      <div className="fixed top-0 right-4 p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsWideTerminal(!isWideTerminal)}
        >
          <HelpCircle className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <ThemeToggle />
        <WalletSelect />
      </div>
      <div
        className="grid gap-8 mt-12 w-full mx-4 transition-all duration-300 ease-in-out h-[80vh]"
        style={{
          gridTemplateColumns: isWideTerminal ? "auto 0" : "auto 30%",
        }}
      >
        <Terminal />
        <div className="overflow-y-auto">
          <TerminalHelp />
        </div>
      </div>
    </main>
  );
}
