// app/layout.tsx
import { Patrick_Hand, Caveat, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--raw-patrick",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--raw-caveat",
  subsets: ["latin"],
});

const excalifont = localFont({
  src: "../fonts/excalifont.woff2",
  variable: "--raw-excalifont",
});

export const metadata: Metadata = {
  title: "shelter",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(patrickHand.variable, caveat.variable, excalifont.variable, "font-sans", inter.variable)}
    >
      <body className="font-primary antialiased">{children}</body>
    </html>
  );
}
