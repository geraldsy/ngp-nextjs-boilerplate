"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import Avatar from "@/components/dashboard/avatar"

//only the name of the data is needed in the searchlist
interface NamedEntity {
  name: string
  _id: string
}

interface ListProps {
  data: NamedEntity[]
  searchName: string
  onUserSelected?: (id: string) => void
}
function getInitials(name: string) {
  const words = name.split(" ")

  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase()
  } else {
    return (
      words[0].charAt(0) + words[words.length - 1].charAt(0)
    ).toUpperCase()
  }
}

export default function SearchList({
  data,
  searchName,
  onUserSelected,
}: ListProps) {
  const sortedName = data.sort((a, b) => a.name.localeCompare(b.name))
  const groupedUsers = sortedName.reduce<Record<string, typeof sortedName>>(
    (groups, user) => {
      const letter = user.name.charAt(0)
      if (!groups[letter]) {
        groups[letter] = []
      }
      groups[letter].push(user)
      return groups
    },
    {}
  )
  return (
    <div className="border border-l-transparent border-r-outlinedefault border-t-transparent">
      <div className="border-b-outlinedefault bg-white p-6 ">
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input placeholder="Search" className="h-full w-full" />
            <Button className="h-auto">
              <Search className="h-4 w-4 " />
            </Button>
          </div>
          <span className="text-xs text-placeholder">
            Total of {data.length} Results
          </span>
        </div>
      </div>
      <ScrollArea className="h-scrollscreen border border-x-transparent border-t-outlinedefault ">
        {Object.entries(groupedUsers).map(([letter, users]) => (
          <div key={letter} className="">
            <h2 className="bg-zinc-50 px-4 py-1 text-xs">{letter}</h2>
            {users.map((user, index) => (
              <div
                key={index}
                className="border border-x-transparent border-b-outlinedefault bg-white p-4 transition-colors hover:bg-muted"
              >
                <Link
                  href="#"
                  className="flex items-center gap-2 font-semibold text-description"
                  onClick={() => onUserSelected && onUserSelected(user._id)}
                >
                  <Avatar initials={getInitials(user.name)} />
                  <p className="text-sm">{user.name}</p>
                </Link>
              </div>
            ))}
          </div>
        ))}
        <div className="flex h-[60px] w-full items-center justify-center">
          <span className="text-xs text-placeholder">End of Results </span>
        </div>
      </ScrollArea>
      <div className="bg-white px-4">
        <Button className="my-5 w-full bg-primary px-5 py-2 font-semibold ">
          Add {searchName}
        </Button>
      </div>
    </div>
  )
}
