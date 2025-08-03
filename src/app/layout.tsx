import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Inter as FontSans } from 'next/font/google';
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "धर्म राज (Dharma Raj)",
  description: "Your trusted source for news and analysis in Hindi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
