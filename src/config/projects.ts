import { Project } from "@/types/types"

const myProjects: Project[] = [
  {
    title: "Simple Tic Tac Toe game",
    description:
      "A simple tic tac toe game made with vite react and websockets.",
    techstack: ["React", "TailwindCSS", "TypeScript", "Vite", "Node.js"],
    githubLink: "https://github.com/deaving-71/simple-tic-tac-toe",
  },
  {
    title: "Chat App",
    description:
      "A discord like chat app. includes features like adding other users as friends, creating private group chats and inviting people to join them.",
    techstack: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Next.js",
      "Fastify",
      "PostgreSQL",
      "Prisma.js",
    ],
    githubLink: "https://github.com/deaving-71/simple-tic-tac-toe",
  },
  {
    title: "Blog with a Custom CMS",
    description:
      "A blog wordpress like template, with a cms built with TipTap API for the wysiwyg text editor.",
    techstack: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Next.js",
      "Mongoose",
      "MongoDB",
    ],
    githubLink: "https://github.com/deaving-71/next-blog",
  },
  {
    title: "Socket.io Chat App",
    description: "A chat app I built in order to learn socket.io",
    techstack: ["React", "TailwindCSS", "TypeScript", "Socket.io", "Node.js"],
    githubLink: "https://github.com/deaving-71/socket.io-chat-example",
  },
  {
    title: "Digiency Landing Page",
    description:
      "My first time trying out Next.js v13.0 and practiving TailwindCSS by turning a community figma design into a webpage.",
    techstack: ["React", "TailwindCSS", "Next.js"],
    githubLink: "https://github.com/deaving-71/digiency-landing-page",
    websiteLink: "https://digiency-landing-page.vercel.app",
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
    websiteLink: "https://b4smm.com",
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
