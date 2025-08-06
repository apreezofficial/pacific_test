import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import { Lato, Inter_Tight } from "next/font/google";
import Footer from "@/components/footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Pacific Safety Solution",
  description:
    "PACIFIC SAFETY SOLUTION LIMITED  is a duly registered Limited Liability Company with CAC in the federal republic of Nigeria with registration number RC1928296, we supply ship maintainace part and other marine supplies such as ship Life Jackets and Work Vests, Immersion Suits, Emergency Food Rations and Water Marine Distress Signals (Pyrotechnics) Safety Lights, New Inflatable Life rafts, MOB, HRU & Line thrower Navigational aids Engines etc ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} ${lato.className} font-sans`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
