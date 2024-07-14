import { Inter } from "next/font/google";
import React from "react";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Threads",
  description: "A next-js 13 metadata Threads application",
};

const inter = Inter({ subsets: ["latin"] });

export default function Rootlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
