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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
        rel="stylesheet"
      />
      <body className={""}>{children}</body>
    </html>
  );
}
