import type { Metadata } from "next";
import "./globals.css";

import { Fjalla_One, Inter } from 'next/font/google'
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({
  subsets: ['latin'],
})

const fjalla = Fjalla_One({
  subsets: ['latin'],
  weight: '400'
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} ${fjalla.className}}`}
      > 
       <ChakraProvider>
            {children}
       </ChakraProvider>
      </body>
    </html>
  );
}
