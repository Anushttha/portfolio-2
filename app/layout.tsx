import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Elegant, bold font for headlines
const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-syne",
  weight: ["400", "700", "800"] 
});

// Tech-inspired font for body text
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  weight: ["300", "400", "500"] 
});

export const metadata: Metadata = {
  title: "Anushttha Srivastava | Creative Developer",
  description: "A digital experience crafted by Anushttha Srivastava.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceGrotesk.variable} text-[#e1e1e1] antialiased overflow-x-hidden`}>
        <SmoothScroll>
            {children}
        </SmoothScroll>
      </body>
    </html>
  );
}