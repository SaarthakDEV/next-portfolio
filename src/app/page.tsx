import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import React from 'react'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'

const page = () => {
  return (
    <>
    <Hero />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    </>
  )
}

export default page
