import type React from "react"
import { UserNav } from "@/components/user-nav"
import { NotificationsPopover } from "@/components/notifications-popover"
import { Sidebar } from "@/components/sidebar"
import { FloatingMenu } from "@/components/floating-menu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar - visível apenas em desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1">
        <header className="border-b border-border">
          <div className="px-4 md:container flex h-14 items-center justify-between">
            <div className="font-bold">
              Capimbot<span className="text-[#74DD3C] text-3xl">.</span>
            </div>
            <div className="flex items-center gap-4">
              <NotificationsPopover />
              <UserNav />
            </div>
          </div>
        </header>
        <main className="px-4 py-4 md:container md:py-6">{children}</main>
      </div>

      {/* Menu flutuante para mobile */}
      <div className="md:hidden">
        <FloatingMenu />
      </div>
    </div>
  )
}

