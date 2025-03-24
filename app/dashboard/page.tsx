import { Instances } from "@/components/instances"
import { Strategies } from "@/components/strategies"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="instances" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="instances"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Instâncias
          </TabsTrigger>
          <TabsTrigger
            value="strategies"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Estratégias
          </TabsTrigger>
        </TabsList>
        <TabsContent value="instances" className="pt-6">
          <h2 className="text-xl font-bold mb-6">Título</h2>
          <Instances />
        </TabsContent>
        <TabsContent value="strategies" className="pt-6">
          <h2 className="text-xl font-bold mb-6">Estratégias</h2>
          <Strategies />
        </TabsContent>
      </Tabs>
    </div>
  )
}

