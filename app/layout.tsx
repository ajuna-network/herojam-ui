import type { Metadata } from "next";
import "./globals.css";
import { MenuTop } from "@/components/layout/menu-top";
import { Providers } from "@/providers/providers";
import { geistMono, geistSans } from "@/fonts";
import { ChainInfo } from "@/components/chain/chain-info";
import { Toaster } from "@/components/ui/sonner";
import { Loader } from "@/components/ui/loader";
import Footer from "@/components/layout/footer";

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
          <main className="mt-16 min-h-[calc(200vh)]">{children}</main>
          <Footer />
          <ChainInfo />
          <Toaster position="bottom-center" icons={{ loading: <Loader /> }} />
        </Providers>
      </body>
    </html>
  );
}
