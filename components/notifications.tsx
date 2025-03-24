"use client"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dados de exemplo para notificações
const mockNotifications = [
  {
    id: "1",
    message:
      "Your site is growing! Your free team all-auto-robots-projects has used 75% of the included free tier usage for Image Optimization - Transformations (3,000 Transformations). You can upgrade to Pro for more included usage and the ability to pay on-demand.",
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
  {
    id: "4",
    message: "promo failed to deploy in the Production environment",
    date: "18 de fev.",
    type: "error",
  },
  {
    id: "5",
    message: "promo failed to deploy in the Production environment",
    date: "18 de fev.",
    type: "error",
  },
]

export function Notifications() {
  return (
    <Card className="h-full bg-[#111] border-0">
      <CardHeader className="border-b border-border/40 px-4 py-3">
        <div className="flex items-center justify-between">
          <Tabs defaultValue="inbox">
            <TabsList className="bg-transparent p-0">
              <TabsTrigger
                value="inbox"
                className="px-3 py-1 text-sm data-[state=active]:bg-transparent data-[state=active]:text-primary"
              >
                Inbox <span className="ml-1 text-xs">27</span>
              </TabsTrigger>
              <TabsTrigger
                value="archive"
                className="px-3 py-1 text-sm data-[state=active]:bg-transparent data-[state=active]:text-primary"
              >
                Archive
              </TabsTrigger>
              <TabsTrigger
                value="comments"
                className="px-3 py-1 text-sm data-[state=active]:bg-transparent data-[state=active]:text-primary"
              >
                Comments
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4779 10.2794 11.496 9.31166C10.7245 8.55135 9.70038 8.12903 8.50634 7.98352C10.0188 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 overflow-auto max-h-[calc(100vh-200px)]">
        <div className="divide-y divide-border/40">
          {mockNotifications.map((notification) => (
            <div key={notification.id} className="p-4 hover:bg-muted/20">
              <div className="flex gap-3">
                <div className="mt-1 text-amber-500">
                  <AlertTriangle size={16} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 text-center border-t border-border/40">
          <Button variant="ghost" className="text-sm">
            Archive All
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

