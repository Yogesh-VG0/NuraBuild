import type { Metadata } from "next";
import { Manrope, Libre_Baskerville } from "next/font/google";
import "./globals.css";

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
  title: "NuraBuild Contracting | Fictional UAE Contractor Website Demo",
  description:
    "A premium light-mode fictional UAE contractor, renovation, and fit-out website concept built as a portfolio demo by Yogesh Vadivel.",
  openGraph: {
    title: "NuraBuild Contracting | Fictional UAE Contractor Website Demo",
    description:
      "A premium light-mode fictional UAE contractor, renovation, and fit-out website concept built as a portfolio demo by Yogesh Vadivel.",
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
        {children}
      </body>
    </html>
  );
}
