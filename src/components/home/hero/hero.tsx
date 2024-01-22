import React from "react"
import { About } from "@/config"

import { SocialIcons } from "./social-icons"

export function Hero() {
  return (
    <section aria-labelledby="Hero" className="py-4">
      <div className="space-y-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
          {About.name}
        </h1>
        <div className="flex flex-wrap items-center gap-2 leading-7 text-muted-foreground">
          {About.tags.map((tag, idx) => (
            <React.Fragment key={tag + idx}>
              <span>{tag}</span>
              {idx !== About.tags.length - 1 && <span>•</span>}
            </React.Fragment>
          ))}
        </div>
        <p className="leading-7">{About.about_me}</p>
        <SocialIcons />
      </div>
    </section>
  )
}
