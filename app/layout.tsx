import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/globals/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Life Notes",
  description: "Life Notes is a simple Note App build with Next (client) & Nest (server)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
