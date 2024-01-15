import { Section } from "@/components/common/section"
import { ContactForm } from "@/components/hire-me"
import { SocialIcons } from "@/components/home"

export default function HireMe() {
  return (
    <main>
      <Section aria-labelledby="contact">
        <h1 className="mb-6 scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
          Contact
        </h1>
        <div className="mb-8">
          <h2 className="scroll-m-20  pb-2 font-medium tracking-tight text-foreground/80 first:mt-0">
            Find me through my socials
          </h2>
          <SocialIcons />
        </div>
        <ContactForm />
      </Section>
    </main>
  )
}
