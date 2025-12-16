import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "shelter",
  description: "a secure place where your thoughts can breathe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
