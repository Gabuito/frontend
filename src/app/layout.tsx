import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/contexts/themeContext";
import { T } from "@/utils/types";
import Icons from "@/utils/icons";
import { FUOC } from "@/utils/fuoc";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Classificado",
  description: "Vamos ver ainda",
};

export default function RootLayout({ children }: T["Node"]): T["Children"] {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <head>
        <Icons />
        <FUOC />
      </head>
      <body className={` ${montserrat.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
