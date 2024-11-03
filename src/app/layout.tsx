import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";
import Sidebar from "../container/mainpage/news/Sidebar";
import MainNews from "../container/mainpage/news/mainNews";
import Footer from "../components/footer";

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
        <Header />
        <Sidebar />
        <MainNews />
        <Footer />
        {children}
      </body>
    </html>
  );
}
