"use client";

import { ChainProvider } from "@reactive-dot/react";

export function ChainProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChainProvider chainId="paseo">{children}</ChainProvider>;
}
