import React from "react"
import { experience } from "@/config"

import { Section } from "@/components/common/section"

export function Experience() {
  return (
    <Section aria-labelledby="projects">
      <h2 className="mb-6 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Experience
      </h2>
      {experience.map((exp, idx) => (
        <div key={exp.title + idx}>
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
            {exp.title}
          </h3>
          <ul className="my-2 ml-6 list-disc text-[.9375rem] text-foreground/80 [&>li]:mt-2">
            {exp.achievements.map((achievement, idx) => (
              <li key={achievement + idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}
