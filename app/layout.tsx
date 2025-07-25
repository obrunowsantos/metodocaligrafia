import type React from "react"
import type { Metadata } from "next"
import { Inter, Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400", variable: "--font-dancing-script" })

export { dancingScript }

export const metadata: Metadata = {
  title: "Caligrafia Fácil - Transforme sua caligrafia em apenas 2 semanas",
  description: "Método prático e divertido para melhorar sua escrita. +300 exercícios para adultos e crianças.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.className} ${dancingScript.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
