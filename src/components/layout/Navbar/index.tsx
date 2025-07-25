"use client";
import useScroll from "@/utils/useScroll";
import Link from "next/link";

const Navbar: React.FC = () => {
  const sectionId = ["home", "skills", "experience", "projects", "contact"];
  const activeId = useScroll(sectionId);
  return (
    <>
      <div className="fixed top-0 container mx-auto ml-30 flex justify-center z-1 py-4 max-w-[85vw] backdrop-blur-xs">
        <Link
          href=""
          className="absolute dancing-script-font text-3xl top-2 left-0"
        >
          Saarthak
        </Link>
        <div className="flex justify-between gap-16">
          <Link
            href="#home"
            className={`nav-link text-gray-400 hover:text-white ${
              activeId === "home" && "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="#skills"
            className={`nav-link text-gray-400 hover:text-white ${
              activeId === "skills" && "text-white"
            }`}
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className={`nav-link text-gray-400 hover:text-white ${
              activeId === "experience" && "text-white"
            }`}
          >
            Experience & Education
          </Link>
          <Link
            href="#projects"
            className={`nav-link text-gray-400 hover:text-white ${
              activeId === "projects" && "text-white"
            }`}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={`nav-link text-gray-400 hover:text-white ${
              activeId === "contact" && "text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
