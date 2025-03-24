"use client"

import { useState } from "react"
import { Power, Plus, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GameSelectModal } from "./game-select-modal"
import { BotSelectModal } from "./bot-select-modal"
import { CreateDoubleModal } from "./create-double-modal"
import { CreateCrashModal } from "./create-crash-modal"

export function StrategyPage() {
  const [isGameSelectOpen, setIsGameSelectOpen] = useState(false)
  const [isBotSelectOpen, setIsBotSelectOpen] = useState(false)
  const [isCreateDoubleModalOpen, setIsCreateDoubleModalOpen] = useState(false)
  const [isCreateCrashModalOpen, setIsCreateCrashModalOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState<"double" | "crash" | null>(null)
  const [doubleExpanded, setDoubleExpanded] = useState(true)
  const [crashExpanded, setCrashExpanded] = useState(true)

  const handleInitiate = () => {
    setIsGameSelectOpen(true)
  }

  const handleGameSelect = (game: "double" | "crash") => {
    setSelectedGame(game)
    setIsGameSelectOpen(false)

    if (game === "double") {
      setIsCreateDoubleModalOpen(true)
    } else if (game === "crash") {
      setIsCreateCrashModalOpen(true)
    } else {
      setIsBotSelectOpen(true)
    }
  }

  const handleCreateModalOpen = () => {
    setIsGameSelectOpen(true)
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={handleInitiate} className="bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-white">
          <Power className="mr-2 h-4 w-4" />
          INICIAR
        </Button>
        <Button
          variant="outline"
          onClick={handleCreateModalOpen}
          className="bg-black text-white border-gray-700 hover:bg-gray-900"
        >
          <Plus className="mr-2 h-4 w-4" />
          CRIAR BOT
        </Button>
      </div>

      <div className="space-y-4">
        {/* Double Bots Section */}
        <div className="bg-black rounded-lg border border-gray-800">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => setDoubleExpanded(!doubleExpanded)}
          >
            <div className="flex items-center gap-2">
              <img src="https://botplus.com.br/double.svg" alt="Double" className="w-6 h-6" />
              <h3 className="text-white font-medium">Double Bots</h3>
            </div>
            {doubleExpanded ? (
              <ChevronUp className="h-5 w-5 text-white" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white" />
            )}
          </div>

          {doubleExpanded && (
            <div className="p-4 border-t border-gray-800">
              <p className="text-gray-400">Nenhum Double Bot criado</p>
            </div>
          )}
        </div>

        {/* Crash Bots Section */}
        <div className="bg-black rounded-lg border border-gray-800">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => setCrashExpanded(!crashExpanded)}
          >
            <div className="flex items-center gap-2">
              <img src="https://botplus.com.br/crash.svg" alt="Crash" className="w-6 h-6" />
              <h3 className="text-white font-medium">Crash Bots</h3>
            </div>
            {crashExpanded ? (
              <ChevronUp className="h-5 w-5 text-white" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white" />
            )}
          </div>

          {crashExpanded && (
            <div className="p-4 border-t border-gray-800">
              <p className="text-gray-400">Nenhum Crash Bot criado</p>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <GameSelectModal open={isGameSelectOpen} onOpenChange={setIsGameSelectOpen} onSelect={handleGameSelect} />

      <BotSelectModal open={isBotSelectOpen} onOpenChange={setIsBotSelectOpen} gameType={selectedGame} />

      {selectedGame === "double" && (
        <CreateDoubleModal
          open={isCreateDoubleModalOpen}
          onOpenChange={(open) => {
            setIsCreateDoubleModalOpen(open)
            if (!open) setSelectedGame(null)
          }}
        />
      )}

      {selectedGame === "crash" && (
        <CreateCrashModal
          open={isCreateCrashModalOpen}
          onOpenChange={(open) => {
            setIsCreateCrashModalOpen(open)
            if (!open) setSelectedGame(null)
          }}
        />
      )}
    </div>
  )
}

