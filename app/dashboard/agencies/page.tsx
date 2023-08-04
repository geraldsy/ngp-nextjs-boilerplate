"use client"

import React, { useState } from "react"

import { agenciesList } from "@/config/agencies"
import { Switch } from "@/components/ui/switch"
import AvatarLg from "@/components/dashboard/avatar-lg"
import SearchList from "@/components/dashboard/search-list"

export default function AgenciesPage() {
  const data = agenciesList //just call the agency api here

  return (
    <div className=" grid grid-cols-[300px_1fr] ">
      <SearchList data={data} searchName="Agency" />
      {/* search single view  */}
      <div className="bg-white">
        <div className="flex w-full justify-between bg-muted p-6 text-primitiveblack">
          <div className="flex gap-6">
            <AvatarLg initials="TT" />
            <div className="space-y-2">
              <span className="text-xl font-bold ">
                Agricultural Training Institute
              </span>
              <div className="text-sm">
                <span>0917 123 4567</span> | <span>ati@email.com</span>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex gap-2">
              <Switch className="data-[state=checked]:bg-success" />
              <span className="text-sm font-semibold">Active</span>
            </div>
          </div>
        </div>
      </div>
      {/* search single view */}
    </div>
  )
}
