import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro José Mesa Herrera - AI Developer & Software Engineer",
  description: "Portfolio profesional de Pedro José Mesa Herrera - Desarrollador Junior en IA, Ingeniero de Software Multiplataforma, Especialista en Agentes de IA y Soluciones SaaS.",
  keywords: "AI Developer, Software Engineer, Caleida, SaaS, Machine Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-gray-100">
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10 flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
