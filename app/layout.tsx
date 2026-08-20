import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer"; // <-- Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LiBrowse | The #1 App for Library Owners & Students",
  description: "Find & Book the Perfect Study Desk Near You.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* The children represent whichever page you are currently on */}
        <div className="flex-1">
          {children}
        </div>
        
        {/* The Footer will now stay at the bottom of EVERY page */}
        <Footer />
      </body>
    </html>
  );
}