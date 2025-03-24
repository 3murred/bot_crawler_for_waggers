"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Power, Trash2 } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BotSelectModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  gameType: "double" | "crash" | null
}

export function BotSelectModal({ open, onOpenChange, gameType }: BotSelectModalProps) {
  const [signalType, setSignalType] = useState("all")

  if (!gameType) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#2A2A2A] border-gray-800">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white text-center flex items-center justify-center gap-2">
            {gameType === "double" ? (
              <>
                <img src="https://botplus.com.br/double.svg" alt="Double" className="w-6 h-6" />
                <span>Double Bots</span>
              </>
            ) : (
              <>
                <img src="https://botplus.com.br/crash.svg" alt="Crash" className="w-6 h-6" />
                <span>Crash Bots</span>
              </>
            )}
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="selectAll"
                  className="border-red-500 data-[state=checked]:bg-red-500 data-[state=checked]:text-white"
                />
                <label htmlFor="selectAll" className="text-sm text-white">
                  Selecionar todos
                </label>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-300">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-gray-400">Nenhum bot criado</p>

            <Select value={signalType} onValueChange={setSignalType}>
              <SelectTrigger className="w-full bg-[#3A3A3A] border-gray-700 text-white">
                <SelectValue placeholder="Todos os sinais" />
              </SelectTrigger>
              <SelectContent className="bg-[#3A3A3A] border-gray-700">
                <SelectItem value="all">Todos os sinais</SelectItem>
                <SelectItem value="win-after-loss">Aguardar WIN após LOSS</SelectItem>
                <SelectItem value="only-loss">Somente após LOSS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between">
            <Button className="bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-white">
              <Power className="mr-2 h-4 w-4" />
              INICIAR
            </Button>
            <Button
              variant="outline"
              className="text-white border-gray-700 hover:bg-gray-800"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4 mr-2" />
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

