import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

type ProjectCardProps = {
  title: string
  description: string
  Icon?: React.ElementType<any, keyof JSX.IntrinsicElements>
}

export function ProjectCard({
  title,
  description,
  Icon = Icons.global,
}: ProjectCardProps) {
  return (
    <article className="transition-all hover:scale-[1.02]">
      <Link
        href="#"
        className="grid grid-cols-[50px_1fr] gap-6 rounded-md border bg-secondary/20 p-6 hover:border-foreground"
      >
        <span className="inline-grid size-11 place-content-center rounded-md bg-secondary">
          {<Icon size={28} />}
        </span>
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            {description}
          </p>
        </div>
      </Link>
    </article>
  )
}
