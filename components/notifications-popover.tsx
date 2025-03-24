"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"

// Dados de exemplo para notificações
const mockNotifications = [
  {
    id: "1",
    message:
      "Your site is growing! Your free team all-auto-robots-projects has used 75% of the included free tier usage.",
    date: "5 de mar.",
    type: "warning",
  },
  {
    id: "2",
    message: "promo failed to deploy in the Production environment",
    date: "20 de fev.",
    type: "error",
  },
  {
    id: "3",
    message: "promo failed to deploy in the Production environment",
    date: "19 de fev.",
    type: "error",
  },
]

export function NotificationsPopover() {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium">2</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[380px] p-0" align="end">
        <Tabs defaultValue="inbox" className="w-full">
          <div className="flex items-center justify-between border-b px-3">
            <TabsList className="h-12 bg-transparent p-0">
              <TabsTrigger
                value="inbox"
                className="data-[state=active]:bg-transparent data-[state=active]:text-primary"
              >
                Inbox
              </TabsTrigger>
              <TabsTrigger
                value="archive"
                className="data-[state=active]:bg-transparent data-[state=active]:text-primary"
              >
                Archive
              </TabsTrigger>
              <TabsTrigger
                value="comments"
                className="data-[state=active]:bg-transparent data-[state=active]:text-primary"
              >
                Comments
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="inbox" className="p-0">
            <ScrollArea className="h-[300px]">
              <div className="divide-y">
                {mockNotifications.map((notification) => (
                  <div key={notification.id} className="p-4 hover:bg-muted/50">
                    <div className="space-y-1">
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="archive" className="h-[300px] p-4">
            <div className="text-center text-sm text-muted-foreground">Nenhuma notificação arquivada</div>
          </TabsContent>
          <TabsContent value="comments" className="h-[300px] p-4">
            <div className="text-center text-sm text-muted-foreground">Nenhum comentário</div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}

