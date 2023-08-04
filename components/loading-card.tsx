import React from "react"
import Image from "next/image"
import Link from "next/link"
import dictlogo from "@/public/dict-logo.svg"
import { Loader2 } from "lucide-react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function LoadingCard() {
  return (
    <div className="flex items-center justify-center rounded-lg border-outlinedefault bg-white p-10 text-primitiveblack sm:h-[493px] sm:w-[507px] sm:border">
      <div className="flex items-center gap-2">
        <Loader2 className="h-4 w-4 animate-spin" strokeWidth={3} />
        <span className="font-bold">Loading...</span>
      </div>
    </div>
  )
}
