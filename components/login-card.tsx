import React from "react"
import Image from "next/image"
import Link from "next/link"
import dictlogo from "@/public/dict-logo.svg"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function LoginCard() {
  return (
    <div className=" h-full w-full rounded-lg border-outlinedefault bg-white p-10 text-primitiveblack sm:h-[493px] sm:w-[507px] sm:border">
      <Image alt="dict logo" src={dictlogo} />
      <h1 className="mt-10 text-2xl font-bold ">Login to your account</h1>
      <h2 className="mt-8 text-sm">Email</h2>
      <Input type="email" placeholder="admin@email.com" className="mt-2" />
      <h2 className="mt-8 text-sm">Password</h2>
      <Input type="password" placeholder="admin@email.com" className="mt-2" />
      <Link href="/dashboard">
        <Button className="mt-7 w-full bg-primarybase text-sm hover:bg-primarybase/90">
          LOG IN
        </Button>
      </Link>
    </div>
  )
}
