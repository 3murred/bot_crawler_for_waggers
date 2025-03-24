"use client"

import { useState } from "react"
import { Trash2, RefreshCw, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConfirmDialog } from "@/components/confirm-dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dados de exemplo para demonstração
const mockHistory = [
  {
    id: "1",
    instanciaId: "1",
    instanciaNome: "Instância Double 1",
    data: "2023-05-15T14:30:00",
    resultado: "win",
    valor: 20.0,
    cor: 1, // vermelho
    numero: 7,
  },
  {
    id: "2",
    instanciaId: "1",
    instanciaNome: "Instância Double 1",
    data: "2023-05-15T14:28:00",
    resultado: "loss",
    valor: -10.0,
    cor: 2, // preto
    numero: 14,
  },
  {
    id: "3",
    instanciaId: "2",
    instanciaNome: "Instância Double 2",
    data: "2023-05-15T14:25:00",
    resultado: "win",
    valor: 10.0,
    cor: 1, // vermelho
    numero: 3,
  },
  {
    id: "4",
    instanciaId: "3",
    instanciaNome: "Instância Crash",
    data: "2023-05-15T14:20:00",
    resultado: "win",
    valor: 30.0,
    multiplicador: 2.5,
  },
  {
    id: "5",
    instanciaId: "3",
    instanciaNome: "Instância Crash",
    data: "2023-05-15T14:15:00",
    resultado: "loss",
    valor: -20.0,
    multiplicador: 1.2,
  },
]

// Função para formatar data
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

export function History() {
  const [history, setHistory] = useState(mockHistory)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedInstance, setSelectedInstance] = useState(null)
  const [filter, setFilter] = useState("all")

  const handleClearHistory = () => {
    if (selectedInstance) {
      setHistory(history.filter((item) => item.instanciaId !== selectedInstance))
    } else {
      setHistory([])
    }
    setDeleteDialogOpen(false)
  }

  const filteredHistory = filter === "all" ? history : history.filter((item) => item.instanciaId === filter)

  // Extrair instâncias únicas para o filtro
  const instances = [...new Set(history.map((item) => item.instanciaId))].map((id) => ({
    id,
    nome: history.find((item) => item.instanciaId === id)?.instanciaNome,
  }))

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl font-bold w-full sm:w-auto">Histórico de Apostas</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filtrar por instância" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as instâncias</SelectItem>
              {instances.map((instance) => (
                <SelectItem key={instance.id} value={instance.id}>
                  {instance.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              onClick={() => {
                setSelectedInstance(filter !== "all" ? filter : null)
                setDeleteDialogOpen(true)
              }}
            >
              <Trash2 className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredHistory.length > 0 ? (
          <div className="grid gap-4">
            {filteredHistory.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-12 w-12 rounded-full flex items-center justify-center ${
                          item.resultado === "win"
                            ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                        }`}
                      >
                        {item.resultado === "win" ? <Check className="h-6 w-6" /> : <X className="h-6 w-6" />}
                      </div>
                      <div>
                        <p className="font-medium text-base">{item.instanciaNome}</p>
                        <p className="text-sm text-muted-foreground">{formatDate(item.data)}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0">
                      <p
                        className={`font-medium text-lg ${
                          item.resultado === "win"
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {item.resultado === "win" ? "+" : ""}
                        {item.valor.toFixed(2)} R$
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        {item.cor !== undefined && (
                          <Badge
                            variant="outline"
                            className={`text-sm
                            ${item.cor === 1 ? "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400" : ""}
                            ${item.cor === 2 ? "bg-gray-100 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400" : ""}
                            ${item.cor === 0 ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400" : ""}
                          `}
                          >
                            {item.cor === 1 ? "Vermelho" : item.cor === 2 ? "Preto" : "Branco"} {item.numero}
                          </Badge>
                        )}
                        {item.multiplicador !== undefined && (
                          <Badge variant="outline" className="text-sm">
                            {item.multiplicador}x
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <RefreshCw className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">Nenhum histórico encontrado</h3>
            <p className="text-muted-foreground mt-1">Não há registros de apostas para exibir.</p>
          </div>
        )}
      </div>

      <ConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title={selectedInstance ? "Limpar histórico da instância" : "Limpar todo o histórico"}
        description={
          selectedInstance
            ? `Tem certeza que deseja limpar o histórico desta instância? Esta ação não pode ser desfeita.`
            : "Tem certeza que deseja limpar todo o histórico? Esta ação não pode ser desfeita."
        }
        onConfirm={handleClearHistory}
      />
    </div>
  )
}

