import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iranYekan = localFont({
  src: "./fonts/iranYekan.woff",
  variable: "--iranYekan",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tree News",
  description: "Tree News Makeen",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa">
      <body style={{ fontFamily: "iranYekan" }}>
        {children}
      </body>
    </html>
  );
}
