import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const socials = [
  {
    name: "Github",
    Icon: Icons.github,
  },
  {
    name: "Github",
    Icon: Icons.github,
  },
  {
    name: "Github",
    Icon: Icons.github,
  },
]
export function SocialIcons() {
  return (
    <div className="space-x-4">
      {socials.map((social, idx) => (
        <Button key={social.name + idx} size="icon" variant="outline">
          {<social.Icon />}
        </Button>
      ))}
    </div>
  )
}
