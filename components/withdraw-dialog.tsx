"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign } from "lucide-react"

export function WithdrawDialog() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica para solicitar saque
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1">
          <DollarSign className="mr-2 h-4 w-4" />
          Solicitar Saque
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Solicitar Saque</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Valor (R$)</Label>
            <Input id="amount" type="number" min="50" step="0.01" placeholder="0.00" required />
            <p className="text-xs text-muted-foreground">Valor mínimo: R$ 50,00</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="account">Conta para Saque</Label>
            <select id="account" className="w-full rounded-md border border-input bg-background px-3 py-2">
              <option value="pix-123">Chave PIX: 123.456.789-00</option>
              <option value="add-new">+ Adicionar nova conta</option>
            </select>
          </div>
          <div className="pt-4 flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-black">
              Confirmar Saque
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

