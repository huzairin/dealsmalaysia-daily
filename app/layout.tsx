import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { defaultDescription, siteName, siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Tech & Deals for Malaysia`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Malaysia",
    "tech reviews",
    "VPN Malaysia",
    "web hosting",
    "Shopee deals",
    "Lazada",
    "affiliate",
  ],
  authors: [{ name: "Deals Malaysia Daily" }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: siteUrl,
    siteName,
    title: siteName,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-MY" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
