import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

import { About } from "./about"

export const siteConfig: SiteConfig = {
  name: "DeaViNG",
  author: "deaving-71",
  description: About.about_me,
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    github: "https://github.com/deaving-71/portfolio",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpeg`,
}
