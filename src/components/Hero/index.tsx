import Background from "../Background"
import Tag from "../Tag"
import Socials from "../Socials"
import DownloadButton from "../DownloadButton";

const Hero = () => {
  return (
    <section id="home" className="md:h-[100vh] relative overflow-hidden max-w-6xl container mx-auto">
      <Background />
      <div className="relative md:mt-25 px-4 mt-30 text-center justify-center">
      <Tag />
      <h1 className="text-5xl md:text-7xl mt-8 ">Saarthak Gupta</h1>
      <p className="mt-10 text-xl max-w-3xl container mx-auto">Hi, I’m a developer who loves solving real-world problems with elegant code and thoughtful design.</p>
      <div className="mt-10 px-1 py-1 border-1 border-white rounded-3xl bg-gradient-to-r from-white via-black to-white flex gap-4 w-[fit-content] mx-auto">
        <a href="mailto:saarthak173@gmail.com" className="bg-black px-3 py-2 rounded-3xl cursor-pointer"> Get in touch</a>
          <DownloadButton />
      </div>
      <Socials />
      </div>
    </section>
  )
}

export default Hero