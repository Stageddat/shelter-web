// app/layout.tsx
import { Patrick_Hand, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  src: "../fonts/excalifont.woff2", // Ajusta la ruta a tu archivo
  variable: "--raw-excalifont",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={` ${patrickHand.variable} ${caveat.variable} ${excalifont.variable} `}
    >
      <body className="font-primary antialiased">{children}</body>
    </html>
  );
}
