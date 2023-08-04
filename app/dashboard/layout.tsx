import React from "react"

import SideNav from "@/components/dashboard/side-nav"
import TopNav from "@/components/dashboard/top-nav"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex h-screen w-full bg-dashboard ">
      <SideNav />
      <div className="w-full ">
        <TopNav />
        <div className="-z-10 ">{children}</div>
      </div>
    </div>
  )
}
