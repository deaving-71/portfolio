import { IconKeys } from "@/components/icons"

export type Project = {
  title: string
  description: string
  Favicon?: React.ElementType<any, keyof JSX.IntrinsicElements>
  techstack: Tech[]
  githubLink?: string
  websiteLink?: string
}

export type IconsType = {
  [key in IconKeys]: React.ElementType
}

export type Skill = {
  category: string
  techs: {
    tech: Tech
    icon: React.ElementType<any, keyof JSX.IntrinsicElements>
  }[]
}

export type Tech =
  | "HTML"
  | "CSS"
  | "TailwindCSS"
  | "JavaScript"
  | "TypeScript"
  | "Node.js"
  | "Express"
  | "Fastify"
  | "React"
  | "Svelte"
  | "SvelteKit"
  | "Next.js"
  | "Golang"
  | "Php"
  | "Twig"
  | "Laravel"
  | "Vite"
  | "Webpack"
  | "Astro.js"
  | "MySQL"
  | "MongoDB"
  | "Mongoose"
  | "PostgreSQL"
  | "Prisma.js"
  | "DrizzleORM"
  | "Socket.io"
  | "AI"
