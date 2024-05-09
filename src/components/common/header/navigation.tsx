"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Icons } from "@/components/icons"

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1novfb4wtCvdtIVlhDhqxPFd7z1x7Z3xm/view",
    external: true,
  },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <ul className="flex items-center gap-6">
      {links.map((link, idx) => (
        <li key={link.name + idx} className="relative">
          <Link
            href={link.href}
            target={link.external ? "_blank" : "_self"}
            className="after:contents-[' '] relative cursor-pointer text-muted-foreground transition-all after:h-[1px] after:w-full after:bg-secondary-foreground hover:text-foreground  hover:after:bg-muted-foreground aria-[current=true]:text-foreground aria-[current=true]:after:block aria-[current=true]:after:bg-foreground"
            aria-current={link.href === pathname}
          >
            {link.name}
            {link.external && (
              <span className="absolute -right-3.5 -top-2 inline-flex size-3">
                {<Icons.ExternalLink />}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
