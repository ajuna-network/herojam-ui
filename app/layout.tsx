import type { Metadata } from "next";
import "./globals.css";
import { MenuTop } from "@/components/nav/menu-top";
import { Providers } from "@/providers/providers";
import { geistMono, geistSans } from "@/fonts";
import { ChainInfo } from "@/components/chain/chain-info";

export const metadata: Metadata = {
  title: "HeroJam - Home",
  description: "HeroJam - Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <MenuTop />
          <main className="mt-16">{children}</main>
          <footer>footer</footer>
          <ChainInfo />
        </Providers>
      </body>
    </html>
  );
}
