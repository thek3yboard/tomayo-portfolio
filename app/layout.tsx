import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Tomás Ceballos - Portfolio",
  description: "Jr Graphic Designer, UX/UI Designer, Editor"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
