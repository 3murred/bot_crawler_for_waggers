import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Power } from "lucide-react";

export default function BetsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold w-full sm:w-auto">Apostas</h1>

        <Button className="bg-[#74DD3C] hover:bg-[#74DD3C]/90 text-black w-full sm:w-auto">
          <Power className="mr-2 h-5 w-5" />
          INICIAR
        </Button>
      </div>

      <div className="p-4 rounded-lg bg-card border border-border">
        <div className="text-center py-2">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400">
            <span className="text-sm font-medium">
              LICENÇA INVÁLIDA. COMPRE O CAPIMBOT PARA UTILIZÁ-LO
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-muted p-3 rounded-md">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 10H23"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Saldo Inicial</h3>
            </div>
            <div className="flex items-center">
              <div className="text-2xl font-bold">••••••••••••</div>
            </div>
            <div className="mt-2 flex items-center text-sm text-green-500">
              <svg
                className="mr-1 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="currentColor"
                  fillOpacity="0.2"
                />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              0% do stop win
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-muted p-3 rounded-md">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 10H23"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Saldo Atual</h3>
            </div>
            <div className="flex items-center">
              <div className="text-2xl font-bold text-green-500">R$ 0,00</div>
            </div>
            <div className="mt-2 flex items-center text-sm text-green-500">
              <svg
                className="mr-1 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="currentColor"
                  fillOpacity="0.2"
                />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              0% de lucro
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-muted p-3 rounded-md">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Placar</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl font-bold text-green-500">0</span>
              <span className="text-2xl">x</span>
              <span className="text-3xl font-bold text-red-500">0</span>
            </div>
            <div className="mt-2 flex items-center text-sm text-blue-500">
              <svg
                className="mr-1 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="currentColor"
                  fillOpacity="0.2"
                />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              0% de assertividade
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="hide-signals" />
        <Label htmlFor="hide-signals" className="text-base">
          Ocultar sinais cancelados
        </Label>
      </div>

      {/* Versão para desktop */}
      <div className="hidden md:block rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[100px]">HORA</TableHead>
              <TableHead>RETIRADA</TableHead>
              <TableHead>RECUPERAÇÃO</TableHead>
              <TableHead>ENTRADA</TableHead>
              <TableHead>STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center py-8 text-muted-foreground"
              >
                NENHUM SINAL RECEBIDO ATÉ O MOMENTO. AGUARDE!
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Versão para mobile */}
      <div className="md:hidden">
        <Card className="border">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground text-lg">
              NENHUM SINAL RECEBIDO ATÉ O MOMENTO. AGUARDE!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
