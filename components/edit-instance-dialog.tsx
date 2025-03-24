"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { updateInstance } from "@/lib/api"
import { useToast } from "@/hooks/use-toast"
import type { Instance } from "@/lib/types"
import { ScrollArea } from "@/components/ui/scroll-area"

interface EditInstanceDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  instance: Instance
  onSuccess?: () => void
  isOfflineMode?: boolean
}

export function EditInstanceDialog({
  open,
  onOpenChange,
  instance,
  onSuccess,
  isOfflineMode = false,
}: EditInstanceDialogProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<Instance>(instance)

  useEffect(() => {
    setFormData(instance)
  }, [instance])

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isOfflineMode) {
      toast({
        title: "Modo Offline",
        description: "Instância atualizada com sucesso (modo offline)",
      })
      onSuccess?.()
      onOpenChange(false)
      return
    }

    try {
      setLoading(true)
      await updateInstance(instance.id, formData)
      toast({
        title: "Sucesso",
        description: "Instância atualizada com sucesso",
      })
      onSuccess?.()
      onOpenChange(false)
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao atualizar instância. Tente novamente.",
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
          <DialogTitle>Editar Instância</DialogTitle>
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
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="modoAposta">Modo de Aposta</Label>
                <Select value={formData.modoAposta} onValueChange={(value) => handleChange("modoAposta", value)}>
                  <SelectTrigger id="modoAposta">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="STRATEGIES">STRATEGIES</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tipoConta">Tipo de Conta</Label>
                <Select value={formData.tipoConta} onValueChange={(value) => handleChange("tipoConta", value)}>
                  <SelectTrigger id="tipoConta">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="REAL">REAL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="saldo">Placar</Label>
                <Input
                  id="saldo"
                  type="number"
                  value={formData.saldo}
                  onChange={(e) => handleChange("saldo", Number.parseFloat(e.target.value))}
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valorEntrada">Valor de Entrada</Label>
                <Input
                  id="valorEntrada"
                  type="number"
                  value={formData.valorEntrada}
                  onChange={(e) => handleChange("valorEntrada", Number.parseFloat(e.target.value))}
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="limiteGanho">Limite de Ganho</Label>
                <Input
                  id="limiteGanho"
                  type="number"
                  value={formData.limiteGanho}
                  onChange={(e) => handleChange("limiteGanho", Number.parseFloat(e.target.value))}
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="limitePerda">Limite de Perda</Label>
                <Input
                  id="limitePerda"
                  type="number"
                  value={formData.limitePerda}
                  onChange={(e) => handleChange("limitePerda", Number.parseFloat(e.target.value))}
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="multiplicador">Multiplicador</Label>
                <Input
                  id="multiplicador"
                  type="number"
                  value={formData.multiplicador}
                  onChange={(e) => handleChange("multiplicador", Number.parseFloat(e.target.value))}
                  min="0"
                  step="0.1"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="martingale">Martingale</Label>
                <Input
                  id="martingale"
                  type="number"
                  value={formData.martingale}
                  onChange={(e) => handleChange("martingale", Number.parseInt(e.target.value))}
                  min="0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxCiclos">Máximo de Ciclos</Label>
                <Input
                  id="maxCiclos"
                  type="number"
                  value={formData.maxCiclos}
                  onChange={(e) => handleChange("maxCiclos", Number.parseInt(e.target.value))}
                  min="0"
                />
              </div>
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

