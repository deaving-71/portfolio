import React from "react"

import { Icons } from "@/components/icons"

export default function SkillIcon() {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
      <Icons.github />
    </span>
  )
}
