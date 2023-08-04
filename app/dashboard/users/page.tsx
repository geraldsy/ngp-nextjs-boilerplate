"use client"

import React, { useState } from "react"
import { PenBox, Trash } from "lucide-react"

import { usersList } from "@/config/users"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import AvatarLg from "@/components/dashboard/avatar-lg"
import SearchList from "@/components/dashboard/search-list"

export default function UsersPage() {
  const data = usersList.sort((a, b) => a.name.localeCompare(b.name))
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleUserSelected = (id: string) => {
    setSelectedId(id)
  }

  const selectedUserData = selectedId
    ? data.find((user) => user._id === selectedId) || null
    : data.length > 0
    ? data[0]
    : null

  return (
    <div className=" grid grid-cols-[300px_1fr] ">
      <SearchList
        data={data}
        searchName="Agency"
        onUserSelected={handleUserSelected}
      />
      {/* search single view  */}
      <div className="bg-white">
        <div className="flex w-full justify-between bg-muted p-6 text-primitiveblack">
          <div className="flex gap-6">
            <AvatarLg initials="TT" />
            <div className="space-y-2">
              <span className="text-xl font-bold ">
                {selectedUserData?.name}
              </span>
              <div className="text-sm">
                <span>{selectedUserData?.contactnumber}</span> |{" "}
                <span>{selectedUserData?.email}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex w-[105px] gap-2">
              <Switch
                checked={selectedUserData?.isActive || false}
                onCheckedChange={() => {}} // Use a function to handle change events
                aria-readonly
                className="data-[state=checked]:bg-success"
              />
              <span className="flex items-center justify-start text-sm font-semibold ">
                {selectedUserData?.isActive ? "Active" : "Inactive"}
              </span>
            </div>
            <div className="flex">
              <Button className="flex gap-2 rounded-r-none border border-outlinedefault bg-zinc-50 px-4 py-3 font-semibold text-description hover:bg-muted">
                <PenBox className="h-4 w-4" strokeWidth={3} />
                Edit
              </Button>
              <Button className="flex gap-2 rounded-l-none border border-outlinedefault bg-zinc-50 px-4 py-3 font-semibold text-description hover:bg-red-600 hover:text-white">
                <Trash className="h-4 w-4" strokeWidth={3} />
                Delete
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-semibold text-primitiveblack ">
                Personal Information
              </h1>
              <p className="text-sm text-description">
                More Information on Access Control Users
              </p>
            </div>
            <Button className="px-4 py-3 text-xs font-semibold">
              Update Roles
            </Button>
          </div>
          <hr className="my-6" />
          <div className="grid grid-cols-2 gap-y-6">
            <div className="flex flex-col gap-y-[6px] ">
              <p className="text-sm text-description">First Name</p>
              <p className="text-sm font-semibold">{selectedUserData?.name}</p>
            </div>
            <div className="flex flex-col gap-y-[6px] ">
              <p className="text-sm text-description">Middle Name</p>
              <p className="text-sm font-semibold">{selectedUserData?.name}</p>
            </div>
            <div className="flex flex-col gap-y-[6px] ">
              <p className="text-sm text-description">Last Name</p>
              <p className="text-sm font-semibold">{selectedUserData?.name}</p>
            </div>
            <div className="flex flex-col gap-y-[6px] ">
              <p className="text-sm text-description">Contact Number</p>
              <p className="text-sm font-semibold">
                {selectedUserData?.contactnumber}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* search single view */}
    </div>
  )
}
