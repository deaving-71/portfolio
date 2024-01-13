import Link from "next/link"

import { Button } from "@/components/ui/button"

import Navigation from "./navigation"

export function Header() {
  return (
    <div className="flex items-center justify-between py-2">
      <Navigation />
      <Button className="text-base" size="sm" asChild>
        <Link href="#">Hire me</Link>
      </Button>
    </div>
  )
}
