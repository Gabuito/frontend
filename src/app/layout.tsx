import type { Metadata } from "next";
import { Suspense } from "react";
import { Montserrat } from "next/font/google";
import Icons from "@/utils/icons";
import { FUOC } from "@/utils/fuoc";
import "./globals.css";

//Contexts
import { ThemeProvider } from "@/contexts/themeContext";
import { DrawerProvider } from "@/contexts/drawerContext";
import Drawer from "@/components/drawer/drawer";

//Types-alias
type Layout = Readonly<{ children: React.ReactNode }>;

//Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

//Metadata
export const metadata: Metadata = {
  title: "Classificado",
  description: "Vamos ver ainda",
};

export default function RootLayout({ children }: Layout) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <head>
        <Icons />
        <FUOC />
      </head>
      <body
        className={` ${montserrat.variable} antialiased dark:bg-neutral-900`}>
        <Suspense
          fallback={
            <div className='w-full h-screen flex items-center justify-center'>
              Loading...
            </div>
          }>
          <ThemeProvider>
            <DrawerProvider>
              <Drawer />
              {children}
            </DrawerProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
