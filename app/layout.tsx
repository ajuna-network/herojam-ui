import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/providers";
import { geistMono } from "@/fonts";
import { Toaster } from "@/components/ui/sonner";
import { Loader } from "@/components/ui/loader";

export const metadata: Metadata = {
  title: "HeroJam",
  description:
    "HeroJam - Demo Terminal App for interacting with the SAGE game engine by Ajuna",
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://herojam.netlify.app/"
  ),
  openGraph: {
    title: "HeroJam",
    description:
      "HeroJam - Demo Terminal App for interacting with the SAGE game engine by Ajuna",
    url: "https://herojam.netlify.app/",
    siteName: "HeroJam",
  },
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
