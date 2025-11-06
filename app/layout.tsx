import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NSE Stocks Tracker",
  description: "Track NSE stocks available for trading today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
