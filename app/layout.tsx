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
      <html lang="en" suppressHydrationWarning>
         <body className={font.className} suppressHydrationWarning={true}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
               <ToastProvider />
               <NavBar />
               <div className="p-6 max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                  {children}
               </div>
               <Footer />
            </ThemeProvider>
         </body>
      </html>
   );
}
