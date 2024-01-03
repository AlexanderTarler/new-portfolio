import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexander Tarler",
  description: "Where creativity and functionality meet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="root">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
