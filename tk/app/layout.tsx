import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { TransitionProvider } from "./components/TransitionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TK Voice & Visuals | Voice Over & Digital Marketing",
  description: "TK Voice & Visuals offers professional voice over, digital marketing, and creative visual services to elevate your brand.",
  keywords: ["tk", "tkvoice", "tk voice", "TK Voice & Visuals", "voice over", "digital marketing", "creative visuals", "voice acting", "marketing agency", "audio production", "video production", "branding"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/site_img/logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.svg",
    apple: "/site_img/logo.jpg",
  },
  openGraph: {
    title: "TK Voice & Visuals | Voice Over & Digital Marketing",
    description: "TK Voice & Visuals offers professional voice over, digital marketing, and creative visual services to elevate your brand.",
    images: ["/site_img/logo.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <TransitionProvider>
          {children}
        </TransitionProvider>
        <Footer />
      </body>
    </html>
  );
}
