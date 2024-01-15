import { MeshGradient } from "@/components/common/mesh-gradient"
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
      <MeshGradient />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <ClientProjects />
    </main>
  )
}
