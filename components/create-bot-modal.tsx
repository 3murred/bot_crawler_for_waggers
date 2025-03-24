"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, X, Save } from "lucide-react"

interface CreateBotModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  gameType: "double" | "crash" | null
}

export function CreateBotModal({ open, onOpenChange, gameType }: CreateBotModalProps) {
  const [showPatternSelect, setShowPatternSelect] = useState(false)

  if (!gameType) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#1A1A1A] border-0">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white text-center">
            {gameType === "double" ? "Double Bot" : "Crash Bot"}
          </h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-white">Nome do bot</label>
              <Input placeholder="Nome do bot" className="bg-[#2A2A2A] border-0 text-white" />
            </div>

            {gameType === "double" ? (
              <>
                <div className="space-y-2">
                  <label className="text-sm text-white">Padrão</label>
                  <div className="relative">
                    <Input
                      readOnly
                      placeholder="Clique no + abaixo para criar um padrão"
                      className="bg-[#2A2A2A] border-0 text-white pr-10"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPatternSelect(!showPatternSelect)}
                    >
                      <Plus className="h-4 w-4 text-white" />
                    </Button>
                  </div>

                  {showPatternSelect && (
                    <div className="mt-4 p-4 bg-[#2A2A2A] rounded-lg space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm text-white">Cor</label>
                        <div className="flex gap-2">
                          {["red", "black", "white"].map((color) => (
                            <Button
                              key={color}
                              variant="outline"
                              size="icon"
                              className={`h-8 w-8 rounded-full ${
                                color === "red" ? "bg-red-500" : color === "black" ? "bg-black" : "bg-white"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-white">Número</label>
                        <div className="grid grid-cols-7 gap-2">
                          {Array.from({ length: 14 }, (_, i) => (
                            <Button
                              key={i}
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-[#3A3A3A] text-white"
                            >
                              {i + 1}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input type="number" placeholder="0.04" className="bg-[#2A2A2A] border-0 text-white" />
                    <span className="text-xs text-gray-400 mt-1">Taxa mínima</span>
                  </div>
                  <div className="flex-1">
                    <Input type="number" placeholder="0.04" className="bg-[#2A2A2A] border-0 text-white" />
                    <span className="text-xs text-gray-400 mt-1">Taxa máxima</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full text-red-500">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Save className="mr-2 h-4 w-4" />
              Salvar
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/5" onClick={() => onOpenChange(false)}>
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

