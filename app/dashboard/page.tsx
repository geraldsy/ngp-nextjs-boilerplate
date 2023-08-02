"use client"

import React from "react"
import {
  AlertCircle,
  CalendarDays,
  ChevronDown,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function DashboardPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="h-full space-y-4 bg-dashboard p-6">
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex w-full items-center justify-between ">
          <h1 className="text-xs uppercase">Overview</h1>
          <div className="flex">
            <Button className="border-outline rounded-l rounded-r-none border bg-zinc-50 px-4 py-3 font-semibold text-primitiveblack hover:bg-dashboard">
              Days
            </Button>
            <Button className="border-outline rounded-none border-b border-t bg-zinc-50 px-4 py-3 font-semibold text-primitiveblack hover:bg-dashboard">
              Months
            </Button>
            <Button className="border-outline rounded-l-none rounded-r border bg-zinc-50 px-4 py-3 font-semibold text-primitiveblack hover:bg-dashboard">
              Days
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="ml-2 flex h-10 items-center bg-zinc-50 p-0 font-semibold text-primitiveblack hover:bg-zinc-50">
                  <span className="border-outline flex h-10 gap-2 rounded-l border px-4 py-3 pr-10">
                    <CalendarDays className="h-4 w-4" />
                    Select Date
                  </span>
                  <span className="border-outline flex h-10 gap-2 rounded-r border px-3 py-3 hover:bg-dashboard">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className=""
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Button className="flex items-center gap-2 rounded bg-primarybase px-4 py-3 text-xs hover:bg-primarybase/90">
          <AlertCircle className="h-4 w-4" />
          Export
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        <div className="flex gap-[18px] rounded-lg border border-outlinedefault bg-white p-4">
          <div className="mt-2 ">
            <h1 className="text-xs font-semibold text-description">
              Total Estimated Users
            </h1>
            <h2 className="text-2xl font-bold text-primitiveblack">
              1,000,000
            </h2>
          </div>
          <div className="flex items-end gap-1 text-success">
            <span className="text-xs font-bold">12%</span>
            <TrendingUp className="h-4 w-4 font-bold" stroke-width="3" />
          </div>
        </div>
        <div className="flex gap-[18px] rounded-lg border border-outlinedefault bg-white p-4">
          <div className="mt-2 ">
            <h1 className="text-xs font-semibold text-description">
              Actual Users
            </h1>
            <h2 className="text-2xl font-bold text-primitiveblack">14,000</h2>
          </div>
          <div className="flex items-end gap-1 text-success">
            <span className="text-xs font-bold">12%</span>
            <TrendingUp className="h-4 w-4 font-bold" stroke-width="3" />
          </div>
        </div>
        <div className="flex gap-[18px] rounded-lg border border-outlinedefault bg-white p-4">
          <div className="mt-2 ">
            <h1 className="text-xs font-semibold text-description">
              Total Approved
            </h1>
            <h2 className="text-2xl font-bold text-primitiveblack">10,000</h2>
          </div>
          <div className="flex items-end gap-1 text-success">
            <span className="text-xs font-bold">12%</span>
            <TrendingUp className="h-4 w-4 font-bold" stroke-width="3" />
          </div>
        </div>
        <div className="flex gap-[18px] rounded-lg border border-outlinedefault bg-white p-4">
          <div className="mt-2 ">
            <h1 className="text-xs font-semibold text-description">Voters</h1>
            <h2 className="text-2xl font-bold text-primitiveblack">
              31,104,175
            </h2>
          </div>
          <div className="flex items-end gap-1 text-success">
            <span className="text-xs font-bold">12%</span>
            <TrendingUp className="h-4 w-4 font-bold" stroke-width="3" />
          </div>
        </div>
      </div>
    </div>
  )
}
