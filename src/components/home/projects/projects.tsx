import { myProjects } from "@/config"

import { ArrowLink, ProjectCard } from "@/components/common"
import { Section } from "@/components/common/section"

export function Projects() {
  return (
    <Section aria-labelledby="projects">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Projects
        </h2>
        <ArrowLink href="/projects" name="See all projects" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {myProjects.map((project, idx) => {
          if (idx >= 4) return

          return <ProjectCard key={project.title + idx} {...project} />
        })}
      </div>
    </Section>
  )
}
