import { ReactElement } from "react"

export type Social = {
    id: string,
    icon: ReactElement,
    href: string
}

export type Skill = {
    id: string,
    logo: string,
    color: string,
    heading: string, 
}

export type ExperienceType = {
    id: number,
    type: string,
    duration: string,
    achievements: string[],
    company: string
}

export type BlogPosts = {
  id: number
  image: string
  date: string
  title: string
  excerpt: string
  techStack: string[]
  link: string
};

export type NAV_ITEM = {
    id: string,
    label: string
}