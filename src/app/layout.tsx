import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Technojam",
  description: "Community",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
