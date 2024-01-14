import React from "react"

import { Section } from "@/components/common/section"

export function Experience() {
  return (
    <Section aria-labelledby="projects">
      <h2 className="mb-6 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Experience
      </h2>
      <div>
        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          The Joke Tax
        </h3>
        <ul className="my-2 ml-6 list-disc text-[.9375rem] text-foreground/80 [&>li]:mt-2">
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
      </div>
      <div>
        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          The Joke Tax
        </h3>
        <ul className="my-2 ml-6 list-disc text-[.9375rem] text-foreground/80 [&>li]:mt-2">
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
      </div>
    </Section>
  )
}
