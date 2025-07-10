import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ModernChatbot from "@/components/chat-interface";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaheer Naeem | Portfolio",
  description: "Shaheer Naeem | Front-End Developer Portfolio | Next.js, TypeScript, Tailwind CSS Expert",
  icons: {
    icon: "/favicon.ico",
  },
};
// updateed favicon
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ModernChatbot />
      </body>
    </html>
  );
}
