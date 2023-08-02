"use client"

import React from "react"
import { Filter, Search } from "lucide-react"

import { agenciesList } from "@/config/agencies"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import Avatar from "@/components/dashboard/avatar"

export default function AgenciesPage() {
  const sortedAgencies = agenciesList.sort((a, b) =>
    a.AgencyName.localeCompare(b.AgencyName)
  )
  const groupedAgencies = sortedAgencies.reduce((groups, agency) => {
    const letter = agency.AgencyName.charAt(0)
    if (!groups[letter]) {
      groups[letter] = []
    }
    groups[letter].push(agency)
    return groups
  }, {})

  return (
    <div className=" grid grid-cols-[300px_1fr] ">
      <div className="border border-l-transparent border-r-outlinedefault border-t-transparent">
        <div className="border-b-outlinedefault bg-white p-6 ">
          <div className="flex gap-2">
            <div className="relative">
              <Input placeholder="Search" className="h-full w-full pl-8" />
              <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-placeholder"
                stroke-width="3"
              />
            </div>

            <Button className="rounded border border-outlinedefault bg-zinc-50 p-3 hover:bg-dashboard">
              <Filter className="h-4 w-4 text-description" />
            </Button>
          </div>
        </div>
        <ScrollArea className="h-scrollscreen border border-x-transparent border-t-outlinedefault ">
          {Object.entries(groupedAgencies).map(([letter, agencies]) => (
            <div key={letter} className="">
              <h2 className="mx-4">{letter}</h2>
              {agencies.map((agency, index) => (
                <div
                  key={index}
                  className="flex gap-2 border border-x-transparent border-b-outlinedefault p-4"
                >
                  <Avatar initials={agency.AgencyInitial} />
                  <p>{agency.AgencyName}</p>
                </div>
              ))}
            </div>
          ))}
        </ScrollArea>
      </div>
      <div className="">agency info</div>
    </div>
  )
}
