import Link from "next/link"

import { Icons } from "@/components/icons"

import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

type ProjectCardProps = {
  title: string
  description: string
  Icon?: React.ElementType<any, keyof JSX.IntrinsicElements>
  techstack: string[]
  githubLink?: string
  websiteLink?: string
}

export function ProjectCard({
  title,
  description,
  Icon = Icons.global,
  techstack,
  githubLink,
  websiteLink,
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-md border bg-secondary/20 p-3 hover:border-foreground sm:p-4 md:p-6">
      <div className=" grid grid-cols-[50px_1fr] gap-6 ">
        <span className="inline-grid size-11 place-content-center rounded-md bg-secondary">
          {<Icon size={28} />}
        </span>
        <div className="space-y-3">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="leading-7 text-muted-foreground">{description}</p>
          <ul className="flex flex-wrap items-center gap-1">
            {techstack.map((tech, idx) => (
              <li key={tech + idx}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom-4 right-4 flex items-center justify-end gap-2 md:absolute md:z-10 md:hidden md:justify-normal md:group-hover:flex">
        <span>
          {websiteLink && (
            <Button
              className="rounded-full"
              variant="secondary"
              size="icon"
              asChild
            >
              <Link
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {<Icons.global />}
              </Link>
            </Button>
          )}
        </span>
        <span>
          {githubLink && (
            <Button
              className="rounded-full"
              variant="secondary"
              size="icon"
              asChild
            >
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                {<Icons.github />}
              </Link>
            </Button>
          )}
        </span>
      </div>
      {(websiteLink || githubLink) && (
        <div className="absolute inset-0 hidden bg-gradient-to-b from-transparent from-10% to-black/70 to-80% md:group-hover:block"></div>
      )}
    </article>
  )
}
