"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "R$ 49,90",
    description: "Perfeito para iniciantes",
    features: ["1 instância ativa", "Estratégias básicas", "Suporte por email", "Atualizações gratuitas"],
    popular: false,
    buttonText: "Começar agora",
  },
  {
    name: "Profissional",
    price: "R$ 99,90",
    description: "Para apostadores sérios",
    features: [
      "5 instâncias ativas",
      "Estratégias avançadas",
      "Suporte prioritário",
      "Análise de desempenho",
      "Alertas personalizados",
    ],
    popular: true,
    buttonText: "Escolher plano",
  },
  {
    name: "Empresarial",
    price: "R$ 199,90",
    description: "Solução completa",
    features: [
      "Instâncias ilimitadas",
      "Estratégias premium",
      "Suporte 24/7",
      "API completa",
      "Relatórios avançados",
      "Acesso antecipado a novidades",
    ],
    popular: false,
    buttonText: "Contato",
  },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-card" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Planos{" "}
            <span className="bg-gradient-to-r from-primary to-green-300 text-transparent bg-clip-text">Acessíveis</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades e comece a automatizar suas apostas hoje mesmo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full flex flex-col ${plan.popular ? "border-primary" : "border-border"}`}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full absolute right-4 top-4">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-foreground">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

