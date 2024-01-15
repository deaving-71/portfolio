import { SocialIcons } from "./social-icons"

const tags = ["Fullstack Web Developer", "Tech Enthusiast"]
export function Hero() {
  return (
    <section aria-labelledby="Hero" className="py-4">
      <div className="space-y-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
          DeaViNG
        </h1>
        <h2 className="flex flex-wrap items-center gap-2 leading-7 text-muted-foreground">
          {tags.map((tag, idx) => (
            <>
              <span key={tag + idx}>{tag}</span>
              {idx !== tags.length - 1 && <span>•</span>}
            </>
          ))}
        </h2>
        <p className="leading-7">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
        <SocialIcons />
      </div>
    </section>
  )
}
