import {
  ArrowRight,
  Command,
  Github,
  Globe,
  Link,
  Moon,
  SunMedium,
} from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  logo: Command,
  sun: SunMedium,
  moon: Moon,
  github: Github,
  global: Globe,
  link: Link,
  arrowRight: ArrowRight,
}

export const Icons: IconsType = icons
