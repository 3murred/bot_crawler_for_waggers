"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CreateStrategyDialog } from "@/components/create-strategy-dialog"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// Dados de exemplo
const strategies = [
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

export function Strategies() {
  const [searchQuery, setSearchQuery] = useState("")
  const [createDialogOpen, setCreateDialogOpen] = useState(false)

  const filteredStrategies = strategies.filter((strategy) =>
    strategy.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-background w-full"
          />
        </div>
        <Button onClick={() => setCreateDialogOpen(true)} variant="outline" className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Criar
        </Button>
      </div>

      {/* Versão para desktop */}
      <div className="hidden md:block rounded-lg border bg-card">
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
            {filteredStrategies.map((strategy) => (
              <TableRow key={strategy.id}>
                <TableCell className="font-medium">
                  <Link href={`/strategy/${strategy.id}`} className="hover:text-primary">
                    {strategy.id}
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      strategy.status === "Available"
                        ? "border-green-500 text-green-500"
                        : "border-blue-500 text-blue-500"
                    }
                  >
                    {strategy.status}
                  </Badge>
                </TableCell>
                <TableCell>{strategy.runtime}</TableCell>
                <TableCell>{strategy.region}</TableCell>
                <TableCell>{strategy.deployed}</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Versão para mobile */}
      <div className="md:hidden space-y-4">
        {filteredStrategies.map((strategy) => (
          <Card key={strategy.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <Link href={`/strategy/${strategy.id}`} className="font-medium text-lg hover:text-primary">
                    {strategy.id}
                  </Link>
                  <Badge
                    variant="outline"
                    className={
                      strategy.status === "Available"
                        ? "border-green-500 text-green-500"
                        : "border-blue-500 text-blue-500"
                    }
                  >
                    {strategy.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Runtime:</span>
                    <span className="ml-2">{strategy.runtime}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Region:</span>
                    <span className="ml-2">{strategy.region}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Deployed:</span>
                    <span className="ml-2">{strategy.deployed}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <CreateStrategyDialog open={createDialogOpen} onOpenChange={setCreateDialogOpen} />
    </div>
  )
}

