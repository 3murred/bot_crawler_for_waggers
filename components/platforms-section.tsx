"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PlatformsSection() {
  return (
    <section className="py-20 bg-card" id="platforms">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            <span className="text-gradient">PLATAFORMAS</span> DISPONÍVEIS
          </h2>
          <div className="flex justify-center gap-8 items-center">
            {/* Ajustado para garantir que ambas as imagens estejam alinhadas verticalmente */}
            <div className="relative flex items-center">
              <Image src="https://botplus.com.br/blaze_logo.svg" alt="Blaze" width={120} height={40} />
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#74DD3C]"></div>
            </div>
            <div className="relative flex items-center">
              <Image src="https://botplus.com.br/jonbet_logo.svg" alt="Jonbet" width={120} height={40} />
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#74DD3C]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

