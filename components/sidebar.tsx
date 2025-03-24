"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  BarChart2,
  History,
  Settings,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  DollarSign,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: BarChart2, label: "Estratégias", href: "/dashboard/strategies" },
    { icon: Zap, label: "Apostas", href: "/dashboard/bets" },
    { icon: DollarSign, label: "Plataformas e Ganhos", href: "/dashboard/platforms" },
    { icon: History, label: "Históricos", href: "/dashboard/history" },
    { icon: User, label: "Perfil", href: "/dashboard/profile" },
    { icon: Settings, label: "Configurações", href: "/settings" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={cn("h-screen border-r bg-card flex flex-col transition-all duration-300", collapsed ? "w-16" : "w-64")}
    >
      <div className="p-4 flex items-center justify-between border-b">
        {!collapsed && (
          <div className="font-bold">
            Capimbot<span className="text-[#74DD3C] text-3xl">.</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn("ml-auto", collapsed && "mx-auto")}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="flex-1 px-2 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
                  pathname === item.href && "bg-accent text-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t">
        {mounted && (
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <>
                {!collapsed && <span>Modo Claro</span>}
                <Sun className="h-4 w-4" />
              </>
            ) : (
              <>
                {!collapsed && <span>Modo Escuro</span>}
                <Moon className="h-4 w-4" />
              </>
            )}
          </Button>
        )}

        <Button
          variant="ghost"
          size="sm"
          className="w-full flex items-center justify-center gap-2 mt-2 text-red-500 hover:text-red-600 hover:bg-red-100/10"
        >
          {!collapsed && <span>Sair</span>}
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

