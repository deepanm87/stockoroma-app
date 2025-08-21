import Header from "@/components/header/header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Stockoroma App",
  description: "Inventory management app that allows users to add and remove products from the warehouse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
