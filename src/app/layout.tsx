import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "PropertyNest",
    template: "%s | PropertyNest",
  },
  description:
    "PropertyNest is a modern real estate platform for buying, selling, and renting properties across Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <Navbar />

        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}