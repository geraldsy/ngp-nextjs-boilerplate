"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { FaBars, FaHome } from "react-icons/fa"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "../ui/button"
import Avatar from "./avatar"
import MenuList from "./menu-list"

export default function TopNav() {
  const pathname = usePathname()

  return (
    <div className="flex w-full items-center justify-between border-b border-outlinedefault bg-white px-4 py-4 md:px-10">
      <div className="flex items-center gap-2 font-semibold text-primarybase">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="flex text-primitiveblack hover:text-primarybase/90 md:hidden"
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
      <Avatar initials="GS" />
    </div>
  )
}
