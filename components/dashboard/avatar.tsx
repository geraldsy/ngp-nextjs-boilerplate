import React from "react"

export default function Avatar({ initials }: { initials: string }) {
  return (
    <div className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-md bg-disabled p-1 text-xs">
      <span className="font-semibold">{initials}</span>
      <div className="absolute -bottom-0 -right-0 h-2 w-2 rounded-full border-2 border-white bg-success"></div>
    </div>
  )
}
