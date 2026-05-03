import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VM Bet - Sverige 2026",
  description: "Sveriges bästa oddsjämförelse för fotbolls-VM 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <<htmlhtml lang="sv">
      <<bodybody className={inter.className}>{children}</body>
    </html>
  );
}
