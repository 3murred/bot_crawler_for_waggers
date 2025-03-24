"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle } from "lucide-react"

export function RegisterAccountDialog() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica para cadastrar conta
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex-1 bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-black">
          <PlusCircle className="mr-2 h-4 w-4" />
          Cadastrar Conta de Saque
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cadastrar Conta de Saque</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nome Completo</Label>
            <Input id="fullName" placeholder="Seu nome completo" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pixKey">Chave PIX</Label>
            <Input id="pixKey" placeholder="CPF, e-mail, telefone ou chave aleatória" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF (somente números)</Label>
            <Input
              id="cpf"
              placeholder="00000000000"
              required
              maxLength={11}
              pattern="[0-9]{11}"
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
            <p className="text-xs text-muted-foreground">Digite apenas os 11 números do CPF, sem pontos ou traços</p>
          </div>

          <div className="pt-4 flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-black">
              Cadastrar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

