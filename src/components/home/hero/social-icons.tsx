import { About } from "@/config"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function SocialIcons() {
  return (
    <div className="space-x-4">
      {About.socials.map((social, idx) => (
        <Button key={social.name + idx} size="icon" variant="outline" asChild>
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            {<social.Icon size={24} />}
          </a>
        </Button>
      ))}
    </div>
  )
}
