import type { Metadata } from "next";
import { Manrope, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteDescription =
  "NuraBuild Contracting delivers villa renovation, commercial fit-out, approval support, and site supervision across Dubai and the UAE.";

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "NuraBuild Contracting | UAE Renovation & Fit-Out",
    template: "%s | NuraBuild Contracting",
  },
  description: siteDescription,
  openGraph: {
    title: "NuraBuild Contracting | UAE Renovation & Fit-Out",
    description: siteDescription,
    type: "website",
    locale: "en_AE",
    siteName: "NuraBuild Contracting",
  },
  twitter: {
    card: "summary_large_image",
    title: "NuraBuild Contracting | UAE Renovation & Fit-Out",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${libreBaskerville.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
