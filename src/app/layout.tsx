import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const irSans = localFont({
  src: "./fonts/irSans.woff",
  variable: "--irSans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tree News",
  description: "Tree News Makeen",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa">
      <body className={`${irSans.variable} antialiased`}>
       
        {children}
      </body>
    </html>
  );
}
