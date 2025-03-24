"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface GameSelectModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelect: (game: "double" | "crash") => void
}

export function GameSelectModal({ open, onOpenChange, onSelect }: GameSelectModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#2A2A2A] border-gray-800">
        <div className="text-center space-y-6">
          <h2 className="text-xl font-semibold text-white">Escolha o game</h2>

          <div className="flex justify-center gap-8">
            <button onClick={() => onSelect("double")} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#3A3A3A] rounded-lg flex items-center justify-center mb-2">
                <img src="https://botplus.com.br/double.svg" alt="Double" className="w-8 h-8" />
              </div>
              <span className="text-white">Double</span>
            </button>

            <button onClick={() => onSelect("crash")} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#3A3A3A] rounded-lg flex items-center justify-center mb-2">
                <img src="https://botplus.com.br/crash.svg" alt="Crash" className="w-8 h-8" />
              </div>
              <span className="text-white">Crash</span>
            </button>
          </div>

          <Button
            variant="outline"
            className="text-white border-gray-700 hover:bg-gray-800"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4 mr-2" />
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

