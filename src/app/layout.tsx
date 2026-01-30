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
  title: "Royal Estates - Premium Real Estate Developers",
  description: "Building dreams and creating lasting homes for first-time buyers. Your trusted partner in finding the perfect home in Bangalore.",
  keywords: ["Royal Estates", "Real Estate", "Bangalore", "Homes", "Apartments", "Villas", "First Time Buyers", "Property"],
  authors: [{ name: "Royal Estates Team" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Royal Estates - Premium Real Estate Developers",
    description: "Building dreams and creating lasting homes for first-time buyers. Your trusted partner in finding the perfect home.",
    url: "https://royalestates.com",
    siteName: "Royal Estates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Estates - Premium Real Estate Developers",
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
