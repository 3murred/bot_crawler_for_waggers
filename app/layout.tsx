import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Configuração da fonte Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Capimbot - Automação de Apostas",
  description: "Plataforma para automação de apostas e estratégias",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Verificar se a rota atual é a landing page ou páginas de autenticação
  const isLandingOrAuth = (headers: Headers) => {
    const pathname = headers.get("x-pathname") || ""
    return pathname === "/" || pathname.startsWith("/auth")
  }

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme={isLandingOrAuth(new Headers()) ? "dark" : undefined}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

