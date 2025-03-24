"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, X, Save, Trash2 } from "lucide-react"

interface CreateCrashModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateCrashModal({ open, onOpenChange }: CreateCrashModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#2A2A2A] border-gray-800">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white text-center flex items-center justify-center gap-2">
            <img src="https://botplus.com.br/crash.svg" alt="Crash" className="w-6 h-6" />
            <span>Crash Bot</span>
          </h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-white">Nome do bot</label>
              <Input placeholder="Nome do bot" className="bg-[#3A3A3A] border-gray-700 text-white" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white">Sequência de taxas</label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">←</span>
                    <Input
                      type="number"
                      defaultValue={0.04}
                      step={0.01}
                      className="bg-[#3A3A3A] border-gray-700 text-white"
                    />
                  </div>
                  <span className="text-xs text-gray-400 mt-1">Taxa mínima</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">→</span>
                    <Input
                      type="number"
                      defaultValue={0.04}
                      step={0.01}
                      className="bg-[#3A3A3A] border-gray-700 text-white"
                    />
                  </div>
                  <span className="text-xs text-gray-400 mt-1">Taxa máxima</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="icon" className="rounded-full border-gray-700">
                  <Plus className="h-4 w-4 text-white" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-700">
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Save className="mr-2 h-4 w-4" />
              Salvar
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

