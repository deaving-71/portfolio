"use client"

import path from "path"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <ul className="flex items-center gap-6">
      {links.map((link, idx) => (
        <li key={link.name + idx}>
          <Link
            href={link.href}
            className="after:contents-[' '] relative cursor-pointer text-muted-foreground transition-all after:h-[1px] after:w-full after:bg-secondary-foreground hover:text-foreground  hover:after:bg-muted-foreground aria-[current=true]:text-foreground aria-[current=true]:after:block aria-[current=true]:after:bg-foreground"
            aria-current={link.href === pathname}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
