import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section com imagem de fundo */}
      <div className="relative min-h-screen">
        {/* Imagem de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagine-a-dynamic-and-animated-scene-representing-%20%281%29-5dt7KE4YD3Q6w7PEwqKOTyPnzKJweN.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10"></div>

        {/* Navbar */}
        <header className="relative z-20">
          <div className="container mx-auto px-6">
            <div className="bg-black/40 backdrop-blur-sm mt-4 rounded-full px-6 py-3 flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="font-brand text-2xl font-bold text-white">
                  capimbot<span className="text-[#74DD3C] text-3xl">.</span>
                </h1>
              </div>

              <nav className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-sm text-white hover:text-primary transition-colors">
                  FUNÇÕES
                </a>
                <a href="#platforms" className="text-sm text-white hover:text-primary transition-colors">
                  PLATAFORMAS
                </a>
                <a href="#pricing" className="text-sm text-white hover:text-primary transition-colors">
                  PREÇOS
                </a>
                <a href="#faq" className="text-sm text-white hover:text-primary transition-colors">
                  DÚVIDAS
                </a>
              </nav>

              <div className="flex items-center gap-4">
                <Button variant="ghost" className="text-white hover:text-primary" asChild>
                  <Link href="/auth/login">LOGIN</Link>
                </Button>
                <Button className="bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-black font-medium" asChild>
                  <Link href="/auth/register">COMEÇAR</Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="container relative z-20 mx-auto px-6 pt-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">
              AUTOMATIZE SUAS <span className="text-[#74DD3C]">APOSTAS</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Chega de perder apostas por falta de tempo. Deixe o Capimbot fazer tudo por você automaticamente e em
              nuvem!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-black font-medium">
                COMEÇAR AGORA
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                SAIBA MAIS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-background" id="features">
        <div className="container mx-auto px-6">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold mb-4">
              RECURSOS <span className="text-[#74DD3C]">PODEROSOS</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Nossa plataforma oferece ferramentas avançadas para maximizar seus resultados e simplificar sua
              experiência de apostas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AUTOMAÇÃO INTELIGENTE",
                description: "Bots que aprendem com o mercado e se adaptam às mudanças em tempo real.",
              },
              {
                title: "ANÁLISE AVANÇADA",
                description: "Estatísticas detalhadas e relatórios de desempenho para otimizar suas estratégias.",
              },
              {
                title: "EXECUÇÃO RÁPIDA",
                description: "Reaja instantaneamente às oportunidades do mercado sem atrasos.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-[#74DD3C]/10 flex items-center justify-center mb-4">
                  <span className="text-[#74DD3C] text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plataformas Section */}
      <section className="py-20 bg-black" id="platforms">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              PLATAFORMAS <span className="text-[#74DD3C]">DISPONÍVEIS</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              O Capimbot é compatível com as principais plataformas de apostas do mercado
            </p>
          </div>

          <div className="flex justify-center items-center gap-16">
            {/* Ajustado para garantir que ambas as imagens estejam alinhadas verticalmente */}
            <div className="relative flex items-center">
              <Image
                src="https://botplus.com.br/blaze_logo.svg"
                alt="Blaze"
                width={160}
                height={80}
                className="object-contain"
              />
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#74DD3C]"></div>
            </div>
            <div className="relative flex items-center">
              <Image
                src="https://botplus.com.br/jonbet_logo.svg"
                alt="Jonbet"
                width={160}
                height={80}
                className="object-contain"
              />
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#74DD3C]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background" id="pricing">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              PLANOS <span className="text-[#74DD3C]">ACESSÍVEIS</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano que melhor se adapta às suas necessidades e comece a automatizar suas apostas hoje mesmo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Básico */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="text-2xl font-bold">Básico</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">R$49,90</span>
                  <span className="text-muted-foreground ml-2">/mês</span>
                </div>
                <p className="text-muted-foreground mt-2">Perfeito para iniciantes</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {["1 instância ativa", "Estratégias básicas", "Suporte por email", "Atualizações gratuitas"].map(
                    (feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#74DD3C] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button className="w-full mt-6 bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-black">Começar agora</Button>
              </div>
            </div>

            {/* Plano Profissional */}
            <div className="bg-card border border-[#74DD3C] rounded-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-[#74DD3C] text-black text-xs font-medium px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6 border-b border-border">
                <h3 className="text-2xl font-bold">Profissional</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">R$99,90</span>
                  <span className="text-muted-foreground ml-2">/mês</span>
                </div>
                <p className="text-muted-foreground mt-2">Para apostadores sérios</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "5 instâncias ativas",
                    "Estratégias avançadas",
                    "Suporte prioritário",
                    "Análise de desempenho",
                    "Alertas personalizados",
                    "Acesso a todas as plataformas",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#74DD3C] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-black">Escolher plano</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black" id="faq">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              PERGUNTAS <span className="text-[#74DD3C]">FREQUENTES</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossa plataforma
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-[#74DD3C]">
                  Como funciona o sistema de automação?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Nosso sistema utiliza algoritmos avançados para monitorar as plataformas de apostas em tempo real.
                  Quando identificamos padrões que correspondem às suas estratégias configuradas, o bot executa
                  automaticamente as apostas conforme suas definições.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-[#74DD3C]">
                  É seguro conectar minha conta de apostas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Sim, utilizamos criptografia de ponta a ponta e não armazenamos suas credenciais. Nossa conexão é
                  feita através de APIs seguras e autorizadas pelas plataformas parceiras.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-[#74DD3C]">
                  Posso usar em qualquer plataforma de apostas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Atualmente suportamos as principais plataformas do mercado, incluindo Blaze e Jonbet. Estamos
                  constantemente expandindo nossa lista de plataformas compatíveis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-[#74DD3C]">
                  Quanto tempo leva para configurar uma estratégia?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  A configuração básica leva apenas alguns minutos. Oferecemos modelos pré-configurados para iniciantes
                  e opções avançadas para usuários experientes que desejam personalizar completamente suas estratégias.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-[#74DD3C]">
                  Existe garantia de lucro?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Não podemos garantir lucros, pois apostas sempre envolvem riscos. Nossa plataforma oferece ferramentas
                  para otimizar suas estratégias e gerenciar riscos, mas os resultados dependem de diversos fatores do
                  mercado.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              PRONTO PARA <span className="text-[#74DD3C]">COMEÇAR?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Junte-se a milhares de apostadores que já estão maximizando seus resultados com nossa plataforma.
            </p>
            <Button size="lg" className="bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-black font-medium" asChild>
              <Link href="/auth/register">CRIAR CONTA AGORA</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <h2 className="font-brand text-2xl font-bold text-white mb-4">capimbot</h2>
              <p className="text-gray-400 max-w-md">
                Automatize suas apostas e maximize seus resultados com nossa plataforma inteligente.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">Plataforma</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#features" className="text-gray-400 hover:text-[#74DD3C]">
                      Recursos
                    </Link>
                  </li>
                  <li>
                    <Link href="#platforms" className="text-gray-400 hover:text-[#74DD3C]">
                      Plataformas
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="text-gray-400 hover:text-[#74DD3C]">
                      Preços
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Empresa</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-[#74DD3C]">
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-[#74DD3C]">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-[#74DD3C]">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-[#74DD3C]">
                      Termos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-[#74DD3C]">
                      Privacidade
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Capimbot. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-[#74DD3C]">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#74DD3C]">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

