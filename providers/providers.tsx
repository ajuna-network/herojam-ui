"use client";

import { ThemeProvider } from "./theme-provider";
import { PolkadotExtensionProvider } from "./polkadot-extension-provider";
import { ChainProvider } from "./chain-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <PolkadotExtensionProvider>
          <ChainProvider>{children}</ChainProvider>
        </PolkadotExtensionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
