"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import dictLogo from "@/public/dict-logo.svg"
import {
  //declare here the icons used in site.ts and declare this also on the IconMap below
  ArrowLeftRight,
  Cog,
  Laptop2,
  LayoutDashboard,
  UserCog,
  Users,
} from "lucide-react"

import { siteConfig } from "@/config/site"

interface IconMapType {
  [key: string]: React.ComponentType<any> // Define the index signature
}

const IconMap: IconMapType = {
  //make sure to declare here also the icon
  ArrowLeftRight,
  Cog,
  Laptop2,
  LayoutDashboard,
  Users,
  UserCog,
}

export default function MenuList() {
  const pathname = usePathname()

  return (
    <div className="w-full pt-6 ">
      <Image alt="dict logo" src={dictLogo} className="mx-auto" width={104} />
      <ul>
        {siteConfig.sideNav.map((item, index) => (
          <li key={index} className="mt-6 ">
            <span className="ml-6 text-xs font-bold uppercase text-description">
              {item.category}
            </span>
            <ul>
              {item.children.map((child, childIndex) => {
                const IconComponent = IconMap[child.icon]
                const isActive = pathname === child.href

                return (
                  <li key={childIndex}>
                    <Link
                      href={child.href}
                      className={`hover:bg-primarymuted flex w-full items-center gap-2 border-4 border-transparent px-6 py-2 font-bold  transition-colors hover:border-l-primary hover:text-primary ${
                        isActive
                          ? "border-l-primary text-primary"
                          : "text-primitiveblack"
                      }`}
                    >
                      {IconComponent && <IconComponent className="h-4 w-4" />}
                      <span className="text-sm">{child.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
