"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Bot,
  BarChart2,
  Zap,
  Shield,
  Clock,
  Globe,
  Lock,
  Smartphone,
  Cpu,
  Headphones,
  Database,
  Repeat,
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Bot,
    title: "AUTOMAÇÃO INTELIGENTE",
    description: "Bots que aprendem com o mercado e se adaptam às mudanças em tempo real.",
  },
  {
    icon: BarChart2,
    title: "ANÁLISE AVANÇADA",
    description: "Estatísticas detalhadas e relatórios de desempenho para otimizar suas estratégias.",
  },
  {
    icon: Zap,
    title: "EXECUÇÃO RÁPIDA",
    description: "Reaja instantaneamente às oportunidades do mercado sem atrasos.",
  },
  {
    icon: Shield,
    title: "SEGURANÇA GARANTIDA",
    description: "Proteção de dados e criptografia de ponta a ponta para suas informações.",
  },
  {
    icon: Clock,
    title: "OPERAÇÃO 24/7",
    description: "Seus bots funcionam ininterruptamente, mesmo quando você está offline.",
  },
  {
    icon: Globe,
    title: "ACESSO GLOBAL",
    description: "Acesse sua conta de qualquer lugar do mundo, a qualquer momento.",
  },
  {
    icon: Lock,
    title: "PRIVACIDADE TOTAL",
    description: "Seus dados e estratégias são mantidos em total sigilo.",
  },
  {
    icon: Smartphone,
    title: "COMPATÍVEL COM MOBILE",
    description: "Controle suas estratégias diretamente do seu smartphone.",
  },
  {
    icon: Cpu,
    title: "ALGORITMOS AVANÇADOS",
    description: "Tecnologia de ponta para identificar os melhores momentos para apostar.",
  },
  {
    icon: Headphones,
    title: "SUPORTE ESPECIALIZADO",
    description: "Equipe de suporte pronta para ajudar com qualquer dúvida.",
  },
  {
    icon: Database,
    title: "BACKUP NA NUVEM",
    description: "Suas estratégias e configurações sempre seguras na nuvem.",
  },
  {
    icon: Repeat,
    title: "ATUALIZAÇÕES CONSTANTES",
    description: "Novas funcionalidades e melhorias sendo adicionadas regularmente.",
  },
]

export function FeaturesSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const scrollPosRef = useRef(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollWidth = carousel.scrollWidth
    const clientWidth = carousel.clientWidth
    const maxScroll = scrollWidth - clientWidth
    const scrollSpeed = 1

    const animate = () => {
      if (!carousel) return

      scrollPosRef.current += scrollSpeed
      if (scrollPosRef.current >= maxScroll) {
        scrollPosRef.current = 0
      }

      carousel.scrollLeft = scrollPosRef.current
      animationRef.current = requestAnimationFrame(animate)
    }

    const startAnimation = () => {
      if (animationRef.current) return
      animationRef.current = requestAnimationFrame(animate)
    }

    const stopAnimation = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = undefined
      }
    }

    const handleMouseEnter = () => stopAnimation()
    const handleMouseLeave = () => startAnimation()

    carousel.addEventListener("mouseenter", handleMouseEnter)
    carousel.addEventListener("mouseleave", handleMouseLeave)

    startAnimation()

    return () => {
      stopAnimation()
      carousel.removeEventListener("mouseenter", handleMouseEnter)
      carousel.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground font-habit">
            RECURSOS <span className="text-gradient">PODEROSOS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa plataforma oferece ferramentas avançadas para maximizar seus resultados e simplificar sua experiência
            de apostas.
          </p>
        </motion.div>

        <div className="relative overflow-hidden mb-16">
          <div ref={carouselRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
            {/* Duplicamos os cards para criar um efeito infinito */}
            {[...features, ...features].map((feature, index) => (
              <Card
                key={`${feature.title}-${index}`}
                className="min-w-[280px] border-border hover:border-primary/50 transition-colors flex-shrink-0"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>

        <div className="mt-20">
          <div className="relative rounded-lg overflow-hidden bg-card p-8 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground font-habit">ESTRATÉGIAS PERSONALIZADAS</h3>
                <p className="text-muted-foreground mb-6">
                  Crie e teste suas próprias estratégias com nossa interface intuitiva. Defina padrões, condições e
                  ações para automatizar completamente suas apostas.
                </p>
                <ul className="space-y-2">
                  {[
                    "Padrões de cores e números",
                    "Gerenciamento de banca inteligente",
                    "Proteção contra perdas",
                    "Alertas em tempo real",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Zap className="h-3 w-3 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-lg overflow-hidden flex items-center justify-center"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capimbotreal-RXRyn93h3TgvT86XHcAm3Mz6mGf8Ei.png"
                  alt="Capim Bot"
                  width={400}
                  height={133}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

