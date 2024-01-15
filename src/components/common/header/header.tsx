import Link from "next/link"

import { Button } from "@/components/ui/button"

import Navigation from "./navigation"

export function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between py-2">
        <Navigation />
        <Button className="text-base" size="sm" asChild>
          <Link href="/hire-me">Hire me</Link>
        </Button>
      </nav>
    </header>
  )
}
