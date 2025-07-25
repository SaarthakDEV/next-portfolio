import Background from '@/components/Background'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Socials from '@/components/Socials'
import Tag from '@/components/Tag'
import Experience from '@/components/Experience'
import React from 'react'
import Contact from '@/components/Contact'

const page = () => {
  return (
    <>
    <section id="home" className="h-[100vh] relative overflow-hidden">
      <Background />
      <div className="relative mt-25 text-center justify-center">
      <Tag />
      <h1 className="text-7xl mt-8 ">Saarthak Gupta</h1>
      <p className="mt-10 text-xl max-w-3xl container mx-auto">Hi, I’m a developer who loves solving real-world problems with elegant code and thoughtful design.</p>
      <div className="mt-10 px-1 py-1 border-1 border-white rounded-3xl bg-gradient-to-r from-white via-black to-white flex gap-4 w-[fit-content] mx-auto">
        <button className="bg-black px-3 py-2 rounded-3xl"> Get started</button>
        <button className="bg-white px-3 py-2 rounded-3xl text-black"> 
          <div className="flex items-center justify-center">
  {/* <div className="w-4 h-4 border-4 border-black border-t-transparent rounded-full animate-spin"></div> */}
          <span className="ml-2">Download Resume</span>
</div>
          </button>
      </div>
      <Socials />
      </div>
    </section>
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    </>
  )
}

export default page
