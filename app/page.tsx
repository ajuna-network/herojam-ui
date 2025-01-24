import { WalletSelect } from "@/components/account/wallet-select";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import Terminal from "@/components/terminal/terminal";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 dark:bg-gray-900 bg-green-100">
      <Terminal />
      <div className="fixed top-0 right-0 p-4">
        <ThemeToggle />
        <WalletSelect />
      </div>
    </main>
  );
}
