import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sreeyan Developers - Premium Real Estate Developers",
  description: "Building dreams and creating lasting homes for first-time buyers. Your trusted partner in finding the perfect home in Bangalore.",
  keywords: ["Sreeyan Developers", "Real Estate", "Bangalore", "Homes", "Apartments", "Villas", "First Time Buyers", "Property"],
  authors: [{ name: "Sreeyan Developers Team" }],
  icons: {
    icon: "/refined-logo.png",
  },
  openGraph: {
    title: "Sreeyan Developers - Premium Real Estate Developers",
    description: "Building dreams and creating lasting homes for first-time buyers. Your trusted partner in finding the perfect home.",
    url: "https://sreeyandevelopers.com",
    siteName: "Sreeyan Developers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sreeyan Developers - Premium Real Estate Developers",
    description: "Building dreams and creating lasting homes for first-time buyers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
