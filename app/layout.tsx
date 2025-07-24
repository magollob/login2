import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Morango do Amor - Mini Curso Chocolicias da Fabi",
  description:
    "Mini curso completo do Morango do Amor viral - Aprenda a fazer, encantar e lucrar com Chocolicias da Fabi",
  icons: {
    icon: "/images/logo-chocolicias.png",
    shortcut: "/images/logo-chocolicias.png",
    apple: "/images/logo-chocolicias.png",
  },
  viewport: "width=device-width, initial-scale=1",
  keywords: "morango do amor, chocolicias da fabi, mini curso, confeitaria, doces, brigadeiro, receitas",
  authors: [{ name: "Chocolicias da Fabi" }],
  creator: "Chocolicias da Fabi",
  publisher: "Chocolicias da Fabi",
  robots: "index, follow",
  openGraph: {
    title: "Morango do Amor - Mini Curso Chocolicias da Fabi",
    description: "Mini curso completo do Morango do Amor viral - Aprenda a fazer, encantar e lucrar",
    type: "website",
    locale: "pt_BR",
    siteName: "Chocolicias da Fabi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morango do Amor - Mini Curso Chocolicias da Fabi",
    description: "Mini curso completo do Morango do Amor viral - Aprenda a fazer, encantar e lucrar",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/logo-chocolicias.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo-chocolicias.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-chocolicias.png" />
        <meta name="theme-color" content="#ec4899" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
