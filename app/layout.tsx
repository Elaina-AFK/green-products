import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import ProductProvider from "./ProductProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Products",
  description: "for GE144 project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductProvider>
          <Header />
          {children}
        </ProductProvider>
      </body>
    </html>
  );
}
