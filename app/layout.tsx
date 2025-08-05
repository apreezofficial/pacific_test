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
  title: "Safety Gear Maintenance Experts – Pacific Safety Solution",
  description:
    "Pacific Safety Solution Ltd in Lagos, Nigeria offers expert maintenance of safety equipment, fiber glass work, wire fall installation, and life-saving appliance servicing.",
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
