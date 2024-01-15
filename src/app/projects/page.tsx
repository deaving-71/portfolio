import { ProjectCard } from "@/components/common"
import { Section } from "@/components/common/section"
import { projects } from "@/components/home"

export default function ProjectsPage() {
  return (
    <Section aria-labelledby="projects">
      <h1 className="mb-6 scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
        Projects
      </h1>
      <div className="space-y-3 [&:not(:last-child)]:mb-6">
        <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          My Projects
        </h2>
        {projects.map((project, idx) => (
          <ProjectCard key={project.title + idx} {...project} />
        ))}
      </div>
    </Section>
  )
}
