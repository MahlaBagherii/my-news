import type { Metadata } from "next";
import "./globals.css";



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
