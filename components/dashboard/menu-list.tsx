import React from "react"
import Image from "next/image"
import Link from "next/link"
import dictLogo from "@/public/dict-logo.svg"
import {
  ArrowLeftRight,
  Cog,
  Laptop2,
  LayoutDashboard,
  Users,
} from "lucide-react"

import { siteConfig } from "@/config/site"

interface IconMapType {
  [key: string]: React.ComponentType<any> // Define the index signature
}

const IconMap: IconMapType = {
  ArrowLeftRight,
  Cog,
  Laptop2,
  LayoutDashboard,
  Users,
}

export default function MenuList() {
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
                return (
                  <li key={childIndex}>
                    <Link
                      href={child.href}
                      className="flex w-full items-center gap-2 border-4 border-transparent px-6 py-2 font-bold text-primitiveblack transition-colors hover:border-l-primarybase hover:bg-primarymuted hover:text-primarybase"
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
