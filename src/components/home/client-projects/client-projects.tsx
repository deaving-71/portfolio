import { clientProjects } from "@/config"

import { ArrowLink, ProjectCard } from "@/components/common"

export function ClientProjects() {
  return (
    <section aria-labelledby="projects" className=" py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Client Projects
        </h2>
        <ArrowLink href="/projects" name="See all projects" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {clientProjects.map((project, idx) => {
          if (idx >= 4) return
          return <ProjectCard key={project.title} {...project} />
        })}
      </div>
    </section>
  )
}
