import React from "react"

import MenuList from "./menu-list"

export default function SideNav() {
  return (
    <div className="hidden h-screen border  border-outlinedefault bg-white sm:w-[240px] md:flex">
      <MenuList />
    </div>
  )
}
