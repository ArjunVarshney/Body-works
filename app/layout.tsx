import NavBar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Body Works",
  description: "Exercise website for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider />
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
