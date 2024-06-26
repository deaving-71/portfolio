import { skills } from "@/config"

import { Section } from "@/components/common/section"

import SkillIcon from "./skill-icon"

export function Skills() {
  return (
    <Section aria-labelledby="projects">
      <h2 className="mb-6 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Skills
      </h2>
      {skills.map((skill, idx) => (
        <div key={skill.category + idx} className="[&:not(:last-child)]:mb-4">
          <h3 className="mb-2 leading-7 text-foreground/80">
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-4">
            {skill.techs.map((tech, idx) => (
              <SkillIcon key={tech.tech + idx}>
                <tech.icon size={24} />
              </SkillIcon>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
