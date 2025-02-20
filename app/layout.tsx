import "./globals.css"
import { Montserrat, Roboto } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-roboto" })

export const metadata = {
  title: "McMaster RoboSub Team",
  description: "Engineering the Future of Underwater Autonomy",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="font-roboto bg-gradient-to-b from-navy to-midnight text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

