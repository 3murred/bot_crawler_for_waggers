"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dados de exemplo
const mockInstance = {
  id: "1",
  nome: "Instância Double 1",
  saldo: 1000.0,
  vitorias: 0,
  derrotas: 0,
  ciclos: 0,
}

// Dados de exemplo para histórico
const mockHistory = [
  {
    id: "promos",
    status: "Available",
    runtime: "PostgreSQL 16",
    region: "Oregon",
    deployed: "20d",
  },
  {
    id: "capimbot-api",
    status: "Deployed",
    runtime: "Node",
    region: "Oregon",
    deployed: "16h",
  },
  {
    id: "api",
    status: "Deployed",
    runtime: "Node",
    region: "Oregon",
    deployed: "14d",
  },
]

export default function InstanceDetails() {
  const params = useParams()
  const router = useRouter()
  const [instance, setInstance] = useState(mockInstance)
  const [loading, setLoading] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Título</h1>
      </div>

      <Tabs defaultValue="instances" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="instances"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Instâncias
          </TabsTrigger>
          <TabsTrigger
            value="strategies"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Estratégias
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card border-0">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold">R$ {instance.saldo.toFixed(2)}</h2>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-0">
          <CardContent className="p-6">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-2">Placar</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Vitórias:</span>
                  <span>{instance.vitorias}</span>
                </div>
                <div className="flex justify-between">
                  <span>Derrotas:</span>
                  <span>{instance.derrotas}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ciclos:</span>
                  <span>{instance.ciclos}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-6">Histórico</h2>

      <div className="rounded-lg border bg-card border-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">SERVICE NAME</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>RUNTIME</TableHead>
              <TableHead>REGION</TableHead>
              <TableHead>DEPLOYED</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockHistory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      item.status === "Available" ? "border-green-500 text-green-500" : "border-blue-500 text-blue-500"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.runtime}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.deployed}</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

