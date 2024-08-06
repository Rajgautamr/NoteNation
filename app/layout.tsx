import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/theme-provider"
import ConvexClientProvider from "@/components/Provider/convex-provider";
import { Toaster, toast } from 'sonner'

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
      
      <body className={inter.className}><ConvexClientProvider><ThemeProvider
            attribute="class"
            defaultTheme="default"
            enableSystem
            disableTransitionOnChange
            storageKey="theme-2"
          >
            <Toaster position="bottom-left"/>
            {children}
            </ThemeProvider></ConvexClientProvider></body>
    </html>
  );
}
