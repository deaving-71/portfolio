import {
  ArrowRight,
  Command,
  Github,
  Globe,
  Link,
  Moon,
  SunMedium,
} from "lucide-react"
import { DiMongodb, DiMysql } from "react-icons/di"
import { FaCss3, FaDiscord, FaHtml5, FaReact } from "react-icons/fa"
import { FaGolang, FaNodeJs, FaXTwitter } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5"
import {
  SiAstro,
  SiExpress,
  SiFastify,
  SiPostgresql,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

import { IconsType } from "@/types/types"

export type IconKeys = keyof typeof icons

const icons = {
  logo: Command,
  sun: SunMedium,
  moon: Moon,
  github: Github,
  discord: FaDiscord,
  twitter: FaXTwitter,
  html: FaHtml5,
  css: FaCss3,
  tailwindcss: SiTailwindcss,
  javascript: IoLogoJavascript,
  typescript: SiTypescript,
  express: SiExpress,
  fastify: SiFastify,
  socketio: SiSocketdotio,
  astrojs: SiAstro,
  nextjs: TbBrandNextjs,
  react: FaReact,
  mysql: DiMysql,
  postgresql: SiPostgresql,
  mongodb: DiMongodb,
  golang: FaGolang,
  nodejs: FaNodeJs,
  global: Globe,
  link: Link,
  arrowRight: ArrowRight,
}

export const Icons: IconsType = icons
