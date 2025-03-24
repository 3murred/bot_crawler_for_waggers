"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Comentado: Lógica de autenticação
    // const email = e.currentTarget.email.value
    // const password = e.currentTarget.password.value
    // Aqui seria feita a autenticação com o backend

    // Simulando um delay de carregamento
    setTimeout(() => {
      // Redirecionar para o dashboard após o login
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen bg-black">
      {/* Image Section */}
      <div className="hidden lg:block w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagine-a-dynamic-and-animated-scene-representing-%20%283%29-bPb5Gcz2CltZnYV3cPOIuJ0KjQF4xq.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Form Section */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="font-brand text-2xl font-bold text-white">capimbot</h1>
          </div>

          <div className="text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Bem vindo de volta!</h2>
            <p className="text-gray-400">Entre com suas credenciais para acessar sua conta</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-400">
                Email
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Seu email"
                  required
                  className="bg-[#111] border-gray-800 text-white pl-10"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password" className="text-gray-400">
                  Senha
                </Label>
                <Link href="/auth/forgot-password" className="text-sm text-gray-400 hover:text-[#74DD3C]">
                  Esqueceu sua senha?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Sua senha"
                  required
                  className="bg-[#111] border-gray-800 text-white pl-10"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-black font-medium"
              disabled={loading}
            >
              {loading ? "ENTRANDO..." : "CONTINUAR"}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-gray-400">
              Não tem uma conta?{" "}
              <Link href="/auth/register" className="text-[#74DD3C] hover:text-[#74DD3C]/90">
                Cadastre-se
              </Link>
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-400">OU</span>
            </div>
          </div>

          <Button variant="outline" className="w-full border-gray-800 text-white hover:bg-gray-800">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
              />
            </svg>
            Continuar com Google
          </Button>

          <p className="text-xs text-center text-gray-400">
            Ao clicar em continuar, você concorda com nossos{" "}
            <Link href="#" className="text-[#74DD3C]">
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link href="#" className="text-[#74DD3C]">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

