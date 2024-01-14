import {
  ClientProjects,
  Experience,
  Hero,
  Projects,
  Skills,
} from "@/components/home"

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <ClientProjects />
    </main>
  )
}
