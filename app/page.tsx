import { WalletSelect } from "@/components/account/wallet-select";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import Terminal from "@/components/terminal/terminal";
import { TerminalHelp } from "@/components/terminal/terminal-help";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 dark:bg-gray-900 bg-green-100 pb-8">
      <div className="fixed top-0 right-4 p-4">
        <ThemeToggle />
        <WalletSelect />
      </div>
      <div className="grid grid-cols-3 gap-8 mt-12 w-full mx-4">
        <Terminal className="col-span-3 lg:col-span-2 sticky top-16 h-[calc(100vh-8rem)] " />
        <TerminalHelp className="hidden lg:block col-span-1 " />
      </div>
    </main>
  );
}
