import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import { ToastProvider } from "@/providers/ToastProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "CryptoHD - Wallet Onboarding",
  description: "Secure HD wallet onboarding",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-background-light dark:bg-background-dark min-h-screen text-[#111318] dark:text-white transition-colors duration-200`}
      >
        <ToastProvider />
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
