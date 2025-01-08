"use client";

import { ThemeProvider } from "./theme-provider";
import { PolkadotExtensionProvider } from "./polkadot-extension-provider";
import { ChainProvider } from "./chain-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PolkadotExtensionProvider>
        <ChainProvider>{children}</ChainProvider>
      </PolkadotExtensionProvider>
    </ThemeProvider>
  );

  //   return (
  //     <ThemeProvider>
  //       <ReactiveDotProviderWrapper>
  //         <ChainProviderWrapper>
  //           <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
  //         </ChainProviderWrapper>
  //       </ReactiveDotProviderWrapper>
  //     </ThemeProvider>
  //   );
}
