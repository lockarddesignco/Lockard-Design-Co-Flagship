import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Lockard Design Co",
  description: "A high-concept, neon-aesthetic landing page for a modern marketing agency, featuring an AI-powered tagline generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans bg-gray-50 text-gray-900 dark:bg-neon-dark dark:text-white selection:bg-neon-blue selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
