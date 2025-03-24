"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { updateStrategy } from "@/lib/api"
import { useToast } from "@/hooks/use-toast"
import type { Strategy } from "@/lib/types"

interface EditStrategyDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  strategy: Strategy
  onSuccess?: () => void
  isOfflineMode?: boolean
}

export function EditStrategyDialog({
  open,
  onOpenChange,
  strategy,
  onSuccess,
  isOfflineMode = false,
}: EditStrategyDialogProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<Strategy>(strategy)

  useEffect(() => {
    setFormData(strategy)
  }, [strategy])

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleConditionChange = (index: number, field: string, value: any) => {
    const updatedEstrategias = [...formData.estrategias]
    updatedEstrategias[index] = { ...updatedEstrategias[index], [field]: value }
    setFormData({ ...formData, estrategias: updatedEstrategias })
  }

  const addCondition = () => {
    setFormData({
      ...formData,
      estrategias: [
        ...formData.estrategias,
        {
          color: 1,
          roll: 0,
          index: formData.estrategias.length,
          operator: "color",
        },
      ],
    })
  }

  const removeCondition = (index: number) => {
    const updatedEstrategias = formData.estrategias.filter((_, i) => i !== index)
    // Update indexes
    const reindexedEstrategias = updatedEstrategias.map((est, i) => ({ ...est, index: i }))
    setFormData({ ...formData, estrategias: reindexedEstrategias })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isOfflineMode) {
      toast({
        title: "Modo Offline",
        description: "Estratégia atualizada com sucesso (modo offline)",
      })
      onSuccess?.()
      onOpenChange(false)
      return
    }

    try {
      setLoading(true)
      await updateStrategy(strategy.id, formData)
      toast({
        title: "Sucesso",
        description: "Estratégia atualizada com sucesso",
      })
      onSuccess?.()
      onOpenChange(false)
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao atualizar estratégia. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Editar Estratégia</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-120px)] pr-4">
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plataforma">Plataforma</Label>
                <Select value={formData.plataforma} onValueChange={(value) => handleChange("plataforma", value)}>
                  <SelectTrigger id="plataforma">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="JONBET">JONBET</SelectItem>
                    <SelectItem value="BETANO">BETANO</SelectItem>
                    <SelectItem value="BET365">BET365</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tipoJogo">Tipo de Jogo</Label>
                <Select value={formData.tipoJogo} onValueChange={(value) => handleChange("tipoJogo", value)}>
                  <SelectTrigger id="tipoJogo">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="DOUBLE">DOUBLE</SelectItem>
                    <SelectItem value="CRASH">CRASH</SelectItem>
                    <SelectItem value="MINES">MINES</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="entrada">Valor de Entrada (R$)</Label>
                <Input
                  id="entrada"
                  type="number"
                  value={formData.entrada}
                  onChange={(e) => handleChange("entrada", Number.parseFloat(e.target.value))}
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Regras de Estratégia</h4>
                <Button type="button" onClick={addCondition} className="bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Regra
                </Button>
              </div>

              {formData.estrategias.map((condition, index) => (
                <div key={index} className="space-y-4 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-medium">Regra #{index + 1}</h5>
                    {formData.estrategias.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeCondition(index)}
                        className="h-8 w-8 text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Tipo</Label>
                      <Select
                        value={condition.operator}
                        onValueChange={(value) => handleConditionChange(index, "operator", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="color">Cor</SelectItem>
                          <SelectItem value="roll">Número</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {condition.operator === "color" ? (
                      <div className="space-y-2">
                        <Label>Cor</Label>
                        <Select
                          value={condition.color.toString()}
                          onValueChange={(value) => handleConditionChange(index, "color", Number.parseInt(value))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Vermelho</SelectItem>
                            <SelectItem value="2">Preto</SelectItem>
                            <SelectItem value="0">Branco</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label>Número</Label>
                        <Input
                          type="number"
                          value={condition.roll}
                          onChange={(e) => handleConditionChange(index, "roll", Number.parseInt(e.target.value))}
                          min="0"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={loading} className="bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-white">
                {loading ? "Salvando..." : "Salvar"}
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

