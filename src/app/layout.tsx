import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sana - Portfolio",
  description: "Front-End Developer Portfolio specializing in React, Next.js, and TypeScript based in Stockholm, Sweden.",
  icons: {
    icon: "/portfolio.svg",
  },
  metadataBase: new URL("https://your-portfolio-domain.vercel.app"), // Replace with your actual live URL
  openGraph: {
    title: "Sana | Frontend Developer Portfolio",
    description: "Front-End Developer Portfolio specializing in React, Next.js, and TypeScript based in Stockholm, Sweden.",
    url: "https://your-portfolio-domain.vercel.app", // Replace with your actual live URL
    siteName: "Sana Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/sana-photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Sana - Frontend Developer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sana | Frontend Developer Portfolio",
    description: "Front-End Developer Portfolio specializing in React, Next.js, and TypeScript based in Stockholm, Sweden.",
    images: ["/sana-photo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between antialiased`}>
        <Header />
        <div className="flex-1 w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}