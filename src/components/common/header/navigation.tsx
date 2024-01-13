import Link from "next/link"

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Link", href: "#" },
]

export default function Navigation() {
  return (
    <ul className="flex items-center gap-6">
      {links.map((link, idx) => (
        <li key={link.name + idx}>
          <Link
            href={link.href}
            className="after:contents-[' '] relative cursor-pointer text-muted-foreground transition-all after:h-[1px] after:w-full after:bg-secondary-foreground hover:text-foreground  hover:after:bg-muted-foreground aria-[current=true]:text-foreground aria-[current=true]:after:block aria-[current=true]:after:bg-foreground"
            aria-current={idx === 0}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
