import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorkNation",
  description: "idk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}><ThemeProvider
            attribute="class"
            defaultTheme="default"
            enableSystem
            disableTransitionOnChange
            storageKey="theme-2"
          >{children}</ThemeProvider></body>
    </html>
  );
}
