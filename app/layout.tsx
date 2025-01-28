import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/providers";
import { geistMono } from "@/fonts";
import { Toaster } from "@/components/ui/sonner";
import { Loader } from "@/components/ui/loader";

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
      <body className={`${geistMono.className} antialiased`}>
        <Providers>
          <main className="">{children}</main>
          <Toaster position="bottom-center" icons={{ loading: <Loader /> }} />
        </Providers>
      </body>
    </html>
  );
}
