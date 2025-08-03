import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Literata as FontBody, PT_Sans as FontHeadline } from 'next/font/google';
import "./globals.css";
import { cn } from "@/lib/utils";

const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = FontHeadline({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: "भारत दृष्टि",
  description: "लोकतंत्र अंधकार में मरता है",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased", fontBody.variable, fontHeadline.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
