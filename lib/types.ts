export interface Instance {
  id: string
  nome: string
  plataforma: string
  tipoJogo: string
  modoAposta: string
  tipoConta: string
  saldo: number
  valorEntrada: number
  limiteGanho: number
  limitePerda: number
  multiplicador: number
  martingale: number
  maxCiclos: number
  status: string
}

export interface Strategy {
  id: string
  nome: string
  plataforma: string
  tipoJogo: string
  entrada: number
  ativo: boolean
  estrategias: {
    operator: string
    color?: number
    roll?: number
    index: number
  }[]
}

