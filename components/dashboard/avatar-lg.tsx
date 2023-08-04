import React from "react"

export default function AvatarLg({ initials }: { initials: string }) {
  return (
    <div className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-md bg-disabled p-1 text-xs">
      <span className="text-xl font-semibold">{initials}</span>
      <div className="absolute -bottom-0 -right-0 h-4 w-4 rounded-full border-2 border-white bg-success"></div>
    </div>
  )
}
