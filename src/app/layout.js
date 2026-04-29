import { Geist, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Share/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiles Gallery",
  description: "A website to showcase a tile gallery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.className}`}>
      <body>
        <Navbar></Navbar>

        <main>{children}</main>
      </body>
    </html>
  );
}
