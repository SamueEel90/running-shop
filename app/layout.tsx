import type { Metadata } from "next";
import { Anta } from "next/font/google";
import "./globals.css";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";


const anta = Anta({
  variable: "--font-anta",
  subsets: ["latin"],
  display: "swap",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Mythic Miles",
  description: "Best running gear online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={anta.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
