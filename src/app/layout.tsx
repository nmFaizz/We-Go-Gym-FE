import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import Head from "next/head";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const mont = localFont({
  src: '../font/Mont-HeavyDEMO.otf',
  variable: '--font-mont',
})

export const metadata: Metadata = {
  title: {
    template: "%s | We Go Gym",
    default: "We Go Gym",
  },
  description: "We Go Gym - Your Ultimate Fitness Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${mont.variable} antialiased bg-dark text-light`}
      >
        <Script
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
          strategy="afterInteractive"
        />
        <ReactQueryProvider>
          <Toaster />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
