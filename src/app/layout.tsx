import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Aljahmi",
  description: "Computer Science graduate and Apple Developer Academy Associate Learner building iOS and web experiences.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ali Aljahmi",
    description: "Computer Science graduate and Apple Developer Academy Associate Learner building iOS and web experiences.",
    siteName: "Ali Aljahmi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ali Aljahmi",
    description: "Computer Science graduate and Apple Developer Academy Associate Learner building iOS and web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
