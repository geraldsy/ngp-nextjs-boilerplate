"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOutIcon, UserCog } from "lucide-react"
import { FaBars, FaHome } from "react-icons/fa"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Button } from "../ui/button"
import Avatar from "./avatar"
import MenuList from "./menu-list"

export default function TopNav() {
  const pathname = usePathname()

  return (
    <div className="flex w-full items-center justify-between border-b border-outlinedefault bg-white px-4 py-4 md:px-10">
      <div className="mr-2 flex items-center gap-2 font-semibold text-primary">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="flex text-primitiveblack hover:text-primary/90 md:hidden"
            >
              <FaBars className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] p-0">
            <MenuList />
          </SheetContent>
        </Sheet>

        <FaHome className="h-4 w-4" />
        <span>{pathname}</span>
      </div>
      <HoverCard openDelay={0} closeDelay={100}>
        <HoverCardTrigger>
          <Avatar initials="GS" />
        </HoverCardTrigger>
        <HoverCardContent className="mr-10 flex w-auto flex-col ">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md bg-white px-4 py-2 hover:bg-muted "
          >
            <UserCog className="h-4 w-4" /> Profile
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md bg-white px-4 py-2 hover:bg-red-600 hover:text-white"
          >
            <LogOutIcon className="h-4 w-4" />
            <span>Logout</span>
          </Link>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
