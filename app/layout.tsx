import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Supreme Group | Engineering Excellence',
  description: 'Supreme Group is a leading provider of engineering and infrastructure solutions, delivering high-quality projects with precision and innovation.',
  keywords: ['Supreme Group', 'Engineering', 'Infrastructure', 'Construction', 'Industrial Solutions', 'Building Excellence'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
