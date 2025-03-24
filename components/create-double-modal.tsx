"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, X } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface CreateDoubleModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateDoubleModal({ open, onOpenChange }: CreateDoubleModalProps) {
  const [showPatternSelect, setShowPatternSelect] = useState(false)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])
  const [betColor, setBetColor] = useState<string | null>(null)

  const handleNumberSelect = (num: number) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num))
    } else {
      setSelectedNumbers([...selectedNumbers, num])
    }
  }

  // Renderiza os ícones de padrão selecionado
  const renderPatternIcons = () => {
    return (
      <div className="flex flex-wrap gap-2 items-center">
        {selectedColor && (
          <div
            className={`
            w-8 h-8 rounded-md flex items-center justify-center
            ${
              selectedColor === "red"
                ? "bg-red-600"
                : selectedColor === "black"
                  ? "bg-black"
                  : selectedColor === "white"
                    ? "bg-white"
                    : selectedColor === "red-black"
                      ? "bg-gradient-to-r from-red-600 to-black"
                      : "bg-gradient-to-r from-red-600 via-black to-white"
            }
          `}
          >
            {selectedColor === "red" && <div className="w-5 h-5 rounded-full bg-black"></div>}
            {selectedColor === "black" && <div className="w-5 h-5 rounded-full bg-white"></div>}
            {selectedColor === "white" && (
              <img src="https://botplus.com.br/double.svg" alt="Double" className="w-5 h-5" />
            )}
            {selectedColor === "red-black" && <div className="w-5 h-5 rounded-full bg-white"></div>}
            {selectedColor === "tricolor" && <div className="w-5 h-5 rounded-full bg-gray-500"></div>}
          </div>
        )}

        {selectedNumbers.map((num) => (
          <div
            key={num}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${num <= 7 ? "bg-red-600" : "bg-black"}`}
          >
            <div
              className={`w-5 h-5 rounded-full ${num <= 7 ? "bg-gray-500" : "bg-white"} flex items-center justify-center`}
            >
              <span className={`text-xs ${num <= 7 ? "text-gray-300" : "text-black"}`}>{num}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#2A2A2A] border-gray-800 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white">Double Bot</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-white">Nome do bot</label>
              <div className="relative">
                <Input placeholder="Nome do bot" className="bg-[#3A3A3A] border-gray-700 text-white text-base h-12" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white">Padrão</label>
              <div className="relative">
                <div className="min-h-12 p-3 bg-[#3A3A3A] border border-gray-700 rounded-md text-white flex items-center">
                  {selectedColor || selectedNumbers.length > 0 ? (
                    renderPatternIcons()
                  ) : (
                    <span className="text-gray-400 text-base">Clique no + abaixo para criar um padrão</span>
                  )}
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full mt-2 border-gray-700 h-12 w-12"
                onClick={() => setShowPatternSelect(!showPatternSelect)}
              >
                <Plus className="h-5 w-5 text-white" />
              </Button>

              {showPatternSelect && (
                <div className="mt-4 p-4 bg-[#3A3A3A] rounded-lg space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-white">Cor</label>
                    <div className="flex gap-2">
                      {/* Quadrado vermelho com círculo preto */}
                      <button
                        className={`w-12 h-12 rounded-md bg-red-600 flex items-center justify-center relative ${selectedColor === "red" ? "ring-2 ring-white" : ""}`}
                        onClick={() => setSelectedColor("red")}
                      >
                        <div className="w-8 h-8 rounded-full bg-black"></div>
                      </button>

                      {/* Quadrado preto com círculo branco */}
                      <button
                        className={`w-12 h-12 rounded-md bg-black flex items-center justify-center relative ${selectedColor === "black" ? "ring-2 ring-white" : ""}`}
                        onClick={() => setSelectedColor("black")}
                      >
                        <div className="w-8 h-8 rounded-full bg-white"></div>
                      </button>

                      {/* Quadrado branco com ícone double */}
                      <button
                        className={`w-12 h-12 rounded-md bg-white flex items-center justify-center relative ${selectedColor === "white" ? "ring-2 ring-white" : ""}`}
                        onClick={() => setSelectedColor("white")}
                      >
                        <img src="https://botplus.com.br/double.svg" alt="Double" className="w-8 h-8" />
                      </button>

                      {/* Quadrado metade vermelho, metade preto com círculo branco */}
                      <button
                        className={`w-12 h-12 rounded-md relative overflow-hidden ${selectedColor === "red-black" ? "ring-2 ring-white" : ""}`}
                        onClick={() => setSelectedColor("red-black")}
                      >
                        <div className="absolute top-0 left-0 w-1/2 h-full bg-red-600"></div>
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-black"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white"></div>
                      </button>

                      {/* Quadrado com três cores e círculo cinza */}
                      <button
                        className={`w-12 h-12 rounded-md relative overflow-hidden ${selectedColor === "tricolor" ? "ring-2 ring-white" : ""}`}
                        onClick={() => setSelectedColor("tricolor")}
                      >
                        <div className="absolute top-0 left-0 w-1/3 h-full bg-red-600"></div>
                        <div className="absolute top-0 left-1/3 w-1/3 h-full bg-black"></div>
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-white"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-500"></div>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white">Número</label>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                      {/* Números 1-7 com fundo vermelho e círculo cinza */}
                      {Array.from({ length: 7 }, (_, i) => i + 1).map((num) => (
                        <button
                          key={num}
                          className={`w-12 h-12 rounded-md bg-red-600 flex items-center justify-center relative ${
                            selectedNumbers.includes(num) ? "ring-2 ring-white" : ""
                          }`}
                          onClick={() => handleNumberSelect(num)}
                        >
                          <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
                            <span className="text-gray-300 text-base">{num}</span>
                          </div>
                        </button>
                      ))}

                      {/* Números 8-14 com fundo preto e círculo branco */}
                      {Array.from({ length: 7 }, (_, i) => i + 8).map((num) => (
                        <button
                          key={num}
                          className={`w-12 h-12 rounded-md bg-black flex items-center justify-center relative ${
                            selectedNumbers.includes(num) ? "ring-2 ring-white" : ""
                          }`}
                          onClick={() => handleNumberSelect(num)}
                        >
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                            <span className="text-black text-base">{num}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white">Cor de aposta</label>
              <RadioGroup value={betColor || ""} onValueChange={setBetColor} className="flex gap-4">
                {/* Vermelho */}
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="red" id="red" className="sr-only" />
                  <Label
                    htmlFor="red"
                    className={`w-12 h-12 rounded-md bg-red-600 flex items-center justify-center cursor-pointer ${betColor === "red" ? "ring-2 ring-white" : ""}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                  </Label>
                </div>

                {/* Preto */}
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="black" id="black" className="sr-only" />
                  <Label
                    htmlFor="black"
                    className={`w-12 h-12 rounded-md bg-black flex items-center justify-center cursor-pointer ${betColor === "black" ? "ring-2 ring-white" : ""}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                  </Label>
                </div>

                {/* Branco */}
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="white" id="white" className="sr-only" />
                  <Label
                    htmlFor="white"
                    className={`w-12 h-12 rounded-md bg-white flex items-center justify-center cursor-pointer ${betColor === "white" ? "ring-2 ring-white" : ""}`}
                  >
                    <img src="https://botplus.com.br/favicon.ico" alt="Favicon" className="w-8 h-8" />
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex justify-between">
            <Button className="bg-red-500 hover:bg-red-600 text-white h-12 text-base">Salvar</Button>
            <Button
              variant="outline"
              className="text-white border-gray-700 hover:bg-gray-800 h-12 text-base"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5 mr-2" />
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

