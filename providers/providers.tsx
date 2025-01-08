"use client";

import { ThemeProvider } from "./theme-provider";
import { PolkadotExtensionProvider } from "./polkadot-extension-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PolkadotExtensionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </PolkadotExtensionProvider>
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
