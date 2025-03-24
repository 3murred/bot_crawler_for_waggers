"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { useRouter, usePathname } from "next/navigation"
import { Home, BarChart2, Moon, Sun, Menu, X, History, DollarSign, Zap, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Montar o componente para evitar problemas de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navigate = (path: string) => {
    router.push(path)
    setIsOpen(false)
  }

  // Renderizar um placeholder durante a montagem para evitar problemas de hidratação
  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="default"
          size="icon"
          className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white h-14 w-14"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Menu items */}
        <div
          className={cn(
            "absolute bottom-16 right-0 flex flex-col gap-4 transition-all duration-300",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
          )}
        >
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg h-14 w-14"
            onClick={() => navigate("/dashboard")}
            aria-label="Dashboard"
          >
            <Home className={cn("h-6 w-6", pathname === "/dashboard" ? "text-primary" : "")} />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg h-14 w-14"
            onClick={() => navigate("/dashboard/strategies")}
            aria-label="Estratégias"
          >
            <BarChart2 className={cn("h-6 w-6", pathname === "/dashboard/strategies" ? "text-primary" : "")} />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg h-14 w-14"
            onClick={() => navigate("/dashboard/bets")}
            aria-label="Apostas"
          >
            <Zap className={cn("h-6 w-6", pathname === "/dashboard/bets" ? "text-primary" : "")} />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg h-14 w-14"
            onClick={() => navigate("/dashboard/platforms")}
            aria-label="Plataformas"
          >
            <DollarSign className={cn("h-6 w-6", pathname === "/dashboard/platforms" ? "text-primary" : "")} />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg h-14 w-14"
            onClick={() => navigate("/dashboard/history")}
            aria-label="Histórico"
          >
            <History className={cn("h-6 w-6", pathname === "/dashboard/history" ? "text-primary" : "")} />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg h-14 w-14"
            onClick={() => navigate("/dashboard/profile")}
            aria-label="Perfil"
          >
            <User className={cn("h-6 w-6", pathname === "/dashboard/profile" ? "text-primary" : "")} />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg h-14 w-14"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </Button>
        </div>

        {/* Main toggle button */}
        <Button
          variant="default"
          size="icon"
          className={cn(
            "rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white transition-transform duration-300 h-14 w-14",
            isOpen && "rotate-45",
          )}
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
    </div>
  )
}

