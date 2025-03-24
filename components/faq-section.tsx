"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o sistema de automação?",
    answer:
      "Nosso sistema utiliza algoritmos avançados para monitorar as plataformas de apostas em tempo real. Quando identificamos padrões que correspondem às suas estratégias configuradas, o bot executa automaticamente as apostas conforme suas definições.",
  },
  {
    question: "É seguro conectar minha conta de apostas?",
    answer:
      "Sim, utilizamos criptografia de ponta a ponta e não armazenamos suas credenciais. Nossa conexão é feita através de APIs seguras e autorizadas pelas plataformas parceiras.",
  },
  {
    question: "Posso usar em qualquer plataforma de apostas?",
    answer:
      "Atualmente suportamos as principais plataformas do mercado, incluindo JONBET e outras. Estamos constantemente expandindo nossa lista de plataformas compatíveis.",
  },
  {
    question: "Quanto tempo leva para configurar uma estratégia?",
    answer:
      "A configuração básica leva apenas alguns minutos. Oferecemos modelos pré-configurados para iniciantes e opções avançadas para usuários experientes que desejam personalizar completamente suas estratégias.",
  },
  {
    question: "Existe garantia de lucro?",
    answer:
      "Não podemos garantir lucros, pois apostas sempre envolvem riscos. Nossa plataforma oferece ferramentas para otimizar suas estratégias e gerenciar riscos, mas os resultados dependem de diversos fatores do mercado.",
  },
  {
    question: "Como posso cancelar minha assinatura?",
    answer:
      "Você pode cancelar sua assinatura a qualquer momento através do painel de controle da sua conta. Não há taxas de cancelamento ou períodos mínimos de contrato.",
  },
]

export function FaqSection() {
  return (
    <section className="py-20" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-primary to-green-300 text-transparent bg-clip-text">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossa plataforma
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

