import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <>
    <div className="container mx-auto flex justify-center relative z-1 py-4 max-w-[85vw]">
      <Link href="" className="absolute dancing-script-font text-3xl top-2 left-0">Saarthak</Link>
      <div className="flex justify-between gap-16">
          <Link href="" className="text-gray-400 hover:text-white">Home</Link>
          <Link href="" className="text-gray-400 hover:text-white">Skills</Link>
          <Link href="" className="text-gray-400 hover:text-white">Experience</Link>
          <Link href="" className="text-gray-400 hover:text-white">Projects</Link>
          <Link href="" className="text-gray-400 hover:text-white">Education</Link>
          <Link href="" className="text-gray-400 hover:text-white">Contact</Link>
      </div>
    </div>
      </>
  )
}

export default Navbar
