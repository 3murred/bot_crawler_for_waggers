"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StrategySectionProps {
  title: string
  type: "double" | "crash"
  description: string
}

export function StrategySection({ title, type, description }: StrategySectionProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg">
      <Button variant="ghost" className="w-full flex justify-between items-center p-4 text-white hover:bg-white/5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{type === "double" ? "⚖️" : "📈"}</span>
          <span className="text-lg">{title}</span>
        </div>
        <ChevronDown className="h-5 w-5" />
      </Button>
      <div className="p-4 text-gray-400 text-sm">{description}</div>
    </div>
  )
}

