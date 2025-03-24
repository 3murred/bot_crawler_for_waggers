"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeDebugger() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-4 left-4 z-50 bg-background border p-4 rounded-lg shadow-lg">
      <p>
        Tema atual: <strong>{theme}</strong>
      </p>
      <p>
        Tema do sistema: <strong>{systemTheme}</strong>
      </p>
      <div className="flex gap-2 mt-2">
        <button onClick={() => setTheme("light")} className="px-3 py-1 bg-primary text-white rounded-md">
          Light
        </button>
        <button onClick={() => setTheme("dark")} className="px-3 py-1 bg-primary text-white rounded-md">
          Dark
        </button>
        <button onClick={() => setTheme("system")} className="px-3 py-1 bg-primary text-white rounded-md">
          System
        </button>
      </div>
    </div>
  )
}

