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
        <div className="flex">
          <div className="w-[4.5vw] h-screen sticky top-0 left-0 bg-[#131E2C]"><Sidebar/></div>
          <div className="w-[95.5vw]">{children}</div>
        </div>
      </body>
    </html>
  );
}
