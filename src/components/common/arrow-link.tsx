import React from "react"
import Link from "next/link"

import { Icons } from "../icons"
import { Button } from "../ui/button"

type ArrowLinkProps = {
  name: string
  href: string
}

export function ArrowLink({ href, name }: ArrowLinkProps) {
  return (
    <Link href={href} className="group flex items-center gap-2 text-foreground">
      <span>{name}</span>
      <span className="transition-all group-hover:translate-x-2">
        {<Icons.arrowRight size={18} />}
      </span>
    </Link>
  )
}
