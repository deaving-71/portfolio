import { Skill } from "@/types/types"
import { Icons } from "@/components/icons"

const skills: Skill[] = [
  {
    category: "Frontend",
    techs: [
      {
        tech: "HTML",
        icon: Icons.html,
      },
      {
        tech: "CSS",
        icon: Icons.css,
      },
      { tech: "React", icon: Icons.react },
      {
        tech: "TailwindCSS",
        icon: Icons.tailwindcss,
      },
    ],
  },
  {
    category: "Backend",
    techs: [
      { tech: "Node.js", icon: Icons.nodejs },
      { tech: "Express", icon: Icons.express },
      { tech: "Fastify", icon: Icons.fastify },
      { tech: "Socket.io", icon: Icons.socketio },
    ],
  },
  {
    category: "Frameworks",
    techs: [
      { tech: "Astro.js", icon: Icons.astrojs },
      { tech: "Next.js", icon: Icons.nextjs },
    ],
  },
  {
    category: "Languages",
    techs: [
      { tech: "JavaScript", icon: Icons.javascript },
      { tech: "TypeScript", icon: Icons.typescript },
      { tech: "Golang", icon: Icons.golang },
    ],
  },
  {
    category: "Databases",
    techs: [
      { tech: "MongoDB", icon: Icons.mongodb },
      { tech: "MySQL", icon: Icons.mysql },
      { tech: "PostgreSQL", icon: Icons.postgresql },
    ],
  },
]

export { skills }
