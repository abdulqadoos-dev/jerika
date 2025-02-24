import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: ['300', '400', '700'], 
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Jerika inc.",
  description: "Simplifying IT, Empowering Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased bg-white`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
