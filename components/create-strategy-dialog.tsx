"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, X } from "lucide-react"
import { useState } from "react"

interface CreateStrategyDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateStrategyDialog({ open, onOpenChange }: CreateStrategyDialogProps) {
  const [selectedColor, setSelectedColor] = useState<number | null>(null)
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])
  const [showNumberSelector, setShowNumberSelector] = useState(false)

  const handleColorSelect = (color: number) => {
    setSelectedColor(color)
  }

  const handleNumberSelect = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number))
    } else {
      setSelectedNumbers([...selectedNumbers, number])
    }
  }

  const toggleNumberSelector = () => {
    setShowNumberSelector(!showNumberSelector)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] bg-background border-border">
        <DialogHeader>
          <DialogTitle>Double Bot</DialogTitle>
        </DialogHeader>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label>Nome do bot</Label>
            <div className="relative">
              <Input className="bg-background border-input" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Padrão</Label>
            <div className="relative">
              <Input
                className="bg-background border-input"
                placeholder="Clique no + abaixo para criar um padrão"
                readOnly
                value={selectedNumbers.length > 0 ? `Números selecionados: ${selectedNumbers.join(", ")}` : ""}
              />
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                onClick={toggleNumberSelector}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {showNumberSelector && (
              <div className="mt-2 p-4 bg-muted rounded-md">
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">Cor</Label>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className={`h-8 w-8 rounded-full bg-red-500 hover:bg-red-600 ${selectedColor === 1 ? "ring-2 ring-foreground" : ""}`}
                        onClick={() => handleColorSelect(1)}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className={`h-8 w-8 rounded-full bg-black hover:bg-gray-900 ${selectedColor === 2 ? "ring-2 ring-foreground" : ""}`}
                        onClick={() => handleColorSelect(2)}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className={`h-8 w-8 rounded-full bg-white hover:bg-gray-100 ${selectedColor === 0 ? "ring-2 ring-foreground" : ""}`}
                        onClick={() => handleColorSelect(0)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block">Número</Label>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 14 }, (_, i) => i + 1).map((num) => (
                        <Button
                          key={num}
                          type="button"
                          variant={selectedNumbers.includes(num) ? "default" : "outline"}
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleNumberSelect(num)}
                        >
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label>Cor de aposta</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className={`h-8 w-8 rounded-full bg-red-500 hover:bg-red-600 ${selectedColor === 1 ? "ring-2 ring-foreground" : ""}`}
                onClick={() => handleColorSelect(1)}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                className={`h-8 w-8 rounded-full bg-black hover:bg-gray-900 ${selectedColor === 2 ? "ring-2 ring-foreground" : ""}`}
                onClick={() => handleColorSelect(2)}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                className={`h-8 w-8 rounded-full bg-white hover:bg-gray-100 ${selectedColor === 0 ? "ring-2 ring-foreground" : ""}`}
                onClick={() => handleColorSelect(0)}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">
              Salvar
            </Button>
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
              <X className="h-4 w-4 mr-2" />
              Fechar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

