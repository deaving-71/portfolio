import { Section } from "@/components/common/section"

import SkillIcon from "./skill-icon"

export function Skills() {
  return (
    <Section aria-labelledby="projects">
      <h2 className="mb-6 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Skills
      </h2>
      <div className="flex flex-wrap gap-4">
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
      </div>
    </Section>
  )
}
