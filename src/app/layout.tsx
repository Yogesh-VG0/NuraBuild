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

export const metadata: Metadata = {
  title: {
    default: "NuraBuild Contracting | UAE Contractor Website Demo",
    template: "%s | NuraBuild Contracting",
  },
  description:
    "Fictional UAE contracting, renovation, and fit-out company website concept. A portfolio demo by Yogesh Vadivel.",
  openGraph: {
    title: "NuraBuild Contracting | UAE Contractor Website Demo",
    description:
      "Fictional UAE contracting, renovation, and fit-out company website concept. A portfolio demo by Yogesh Vadivel.",
    type: "website",
    locale: "en_AE",
  },
  robots: {
    index: false,
    follow: false,
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
