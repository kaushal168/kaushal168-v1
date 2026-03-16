import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { SocialSide } from "@/components/layout/SocialSide";
import { EmailSide } from "@/components/layout/EmailSide";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: {
    default: "Kaushal Baid | Software Engineer",
    template: "%s | Kaushal Baid",
  },
  description: "Senior Web Strategist and UI/UX Architect based in Hyderabad, India.",
  keywords: ["Software Engineer", "React", "Next.js", "Java", "Spring Boot", "Hyderabad"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} font-heading min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <SocialSide />
          <EmailSide />
          <main className="pt-24 px-6 md:px-24 max-w-7xl mx-auto flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}