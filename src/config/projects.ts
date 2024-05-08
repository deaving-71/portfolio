import { Project } from "@/types/types"

const myProjects: Project[] = [
  {
    title: "Nextjs Blog",
    description: "A blog website with a custom cms build with nextjs.",
    techstack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Express",
      "PostgreSQL",
      "DrizzleORM",
    ],
    websiteLink: "https://nextjs-blog-ecru-six.vercel.app",
    githubLink: "https://github.com/deaving-71/nextjs-blog",
  },
  {
    title: "Noire Chat",
    description:
      "A chat app that is similar to discord where you can add friends and create channels to chat with others.",
    techstack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Adonis.js",
      "LucidORM",
      "PostgreSQL",
      "Socket.io",
    ],
    websiteLink: "https://noire-chat.vercel.app",
    githubLink: "https://github.com/deaving-71/noire-chat",
  },
  {
    title: "Filament Ecommerce",
    description:
      "An ecommerce website built using Laravel FilamentPHP and Inertia.js.",
    techstack: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Inertia.js",
      "Laravel",
      "EloquentORM",
      "MySQL",
    ],
    githubLink: "https://github.com/deaving-71/Ecommerce-Filament",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A simple tic tac toe game made with vite react and websockets.",
    techstack: ["React", "TailwindCSS", "TypeScript", "Vite", "Socket.io"],
    githubLink: "https://github.com/deaving-71/simple-tic-tac-toe",
  },
]

const clientProjects: Project[] = [
  {
    title: "B4Hosting",
    description: "A landing page for a web hosting site.",
    techstack: ["HTML", "TailwindCSS", "Astro.js", "JavaScript"],
    websiteLink: "https://b4hosting.co.uk",
  },
  {
    title: "B4SMM",
    description: "B4SMM is a social media marketing website.",
    techstack: ["HTML", "TailwindCSS", "JavaScript", "Twig", "Php", "Laravel"],
    websiteLink: "https://b4smm.com/en",
  },
  {
    title: "TechSpecs",
    description:
      "A chat bot that allows users to engage in conversations, ask about specs, features, and reviews, and receive real-time information about mobile phones.",
    techstack: [
      "React",
      "CSS",
      "Next.js",
      "JavaScript",
      "Mongoose",
      "MongoDB",
      "AI",
    ],
    websiteLink: "https://techspecs.io/chat",
  },
]
export { myProjects, clientProjects }
