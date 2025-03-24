"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden beams-bg">
      <div className="absolute inset-0 hero-gradient" />

      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl"
        >
          <h1 className="font-habit text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
            AUTOMATIZE SUAS <span className="text-gradient">APOSTAS</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Chega de perder apostas por falta de tempo. Deixe o Capim fazer tudo por você automaticamente e em nuvem!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="button-gradient text-white hover:opacity-90 font-medium">
              COMECE AGORA
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              SAIBA MAIS
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

