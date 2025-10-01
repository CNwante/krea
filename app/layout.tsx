import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { WorkspaceProvider } from "@/context/WorkspaceContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartolinks Frontend Internship",
  description: "Pixel perfect Next.js 15 + Tailwind CSS app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-gray-900 dark:text-gray-100`}>
        <Providers>
          <WorkspaceProvider>
            {children}
          </WorkspaceProvider>
        </Providers>
      </body>
    </html>
  );
}
