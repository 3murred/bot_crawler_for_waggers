"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { DollarSign } from "lucide-react";
import dynamic from "next/dynamic";

// Importar componentes do cliente dinamicamente
const AccountLinkDialog = dynamic(
  () =>
    import("@/components/account-link-dialog").then(
      (mod) => mod.AccountLinkDialog
    ),
  { ssr: false }
);

const WithdrawDialog = dynamic(
  () =>
    import("@/components/withdraw-dialog").then((mod) => mod.WithdrawDialog),
  { ssr: false }
);

const RegisterAccountDialog = dynamic(
  () =>
    import("@/components/register-account-dialog").then(
      (mod) => mod.RegisterAccountDialog
    ),
  { ssr: false }
);

export default function PlatformsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Plataformas e Ganhos</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Plataformas */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Plataformas Disponíveis</h2>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center">
                    <Image
                      src="https://botplus.com.br/blaze_logo.svg"
                      alt="Blaze"
                      width={100}
                      height={40}
                      className="object-contain"
                    />
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#74DD3C]"></div>
                  </div>
                  <div>
                    <h3 className="font-medium">Blaze</h3>
                    <p className="text-sm text-muted-foreground">
                      Status:{" "}
                      <span className="text-red-500">Não vinculado</span>
                    </p>
                  </div>
                </div>
                <AccountLinkDialog platform="blaze" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center">
                    <Image
                      src="https://botplus.com.br/jonbet_logo.svg"
                      alt="Jon.bet"
                      width={100}
                      height={40}
                      className="object-contain"
                    />
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#74DD3C]"></div>
                  </div>
                  <div>
                    <h3 className="font-medium">Jon.bet</h3>
                    <p className="text-sm text-muted-foreground">
                      Status: <span className="text-green-500">Vinculado</span>
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Desvincular
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ganhos */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Seus Ganhos</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">
                  Disponível para Saque
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-2xl font-bold">R$ 1.250,00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">
                  Total em Retiradas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-2xl font-bold">R$ 5.780,00</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <RegisterAccountDialog />
            <WithdrawDialog />
          </div>
        </div>
      </div>

      {/* Histórico de Saques */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Histórico de Saques</h2>

        {/* Versão para desktop */}
        <div className="hidden md:block rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">
                  ID da Transação
                </TableHead>
                <TableHead className="whitespace-nowrap">Valor</TableHead>
                <TableHead className="whitespace-nowrap">Data</TableHead>
                <TableHead className="whitespace-nowrap">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "TX78945612",
                  value: "R$ 500,00",
                  date: "15/03/2025",
                  status: "Concluído",
                },
                {
                  id: "TX78945613",
                  value: "R$ 750,00",
                  date: "10/03/2025",
                  status: "Concluído",
                },
                {
                  id: "TX78945614",
                  value: "R$ 1.200,00",
                  date: "28/02/2025",
                  status: "Concluído",
                },
                {
                  id: "TX78945615",
                  value: "R$ 300,00",
                  date: "15/02/2025",
                  status: "Concluído",
                },
                {
                  id: "TX78945616",
                  value: "R$ 1.500,00",
                  date: "05/02/2025",
                  status: "Concluído",
                },
                {
                  id: "TX78945617",
                  value: "R$ 830,00",
                  date: "25/01/2025",
                  status: "Concluído",
                },
                {
                  id: "TX78945618",
                  value: "R$ 700,00",
                  date: "17/03/2025",
                  status: "Em processamento",
                },
              ].map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium whitespace-nowrap">
                    {transaction.id}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {transaction.value}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {transaction.date}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Badge
                      variant="outline"
                      className={
                        transaction.status === "Concluído"
                          ? "border-green-500 text-green-500 dark:border-green-500 dark:text-green-500"
                          : transaction.status === "Em processamento"
                          ? "border-yellow-500 text-yellow-500 dark:border-yellow-500 dark:text-yellow-500"
                          : "border-red-500 text-red-500 dark:border-red-500 dark:text-red-500"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Versão para mobile */}
        <div className="md:hidden space-y-4">
          {[
            {
              id: "TX78945612",
              value: "R$ 500,00",
              date: "15/03/2025",
              status: "Concluído",
            },
            {
              id: "TX78945613",
              value: "R$ 750,00",
              date: "10/03/2025",
              status: "Concluído",
            },
            {
              id: "TX78945614",
              value: "R$ 1.200,00",
              date: "28/02/2025",
              status: "Concluído",
            },
            {
              id: "TX78945615",
              value: "R$ 300,00",
              date: "15/02/2025",
              status: "Concluído",
            },
            {
              id: "TX78945616",
              value: "R$ 1.500,00",
              date: "05/02/2025",
              status: "Concluído",
            },
            {
              id: "TX78945617",
              value: "R$ 830,00",
              date: "25/01/2025",
              status: "Concluído",
            },
            {
              id: "TX78945618",
              value: "R$ 700,00",
              date: "17/03/2025",
              status: "Em processamento",
            },
          ].map((transaction) => (
            <Card key={transaction.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{transaction.id}</span>
                    <Badge
                      variant="outline"
                      className={
                        transaction.status === "Concluído"
                          ? "border-green-500 text-green-500 dark:border-green-500 dark:text-green-500"
                          : transaction.status === "Em processamento"
                          ? "border-yellow-500 text-yellow-500 dark:border-yellow-500 dark:text-yellow-500"
                          : "border-red-500 text-red-500 dark:border-red-500 dark:text-red-500"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Valor:</span>
                      <span className="ml-2 font-medium">
                        {transaction.value}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Data:</span>
                      <span className="ml-2">{transaction.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
