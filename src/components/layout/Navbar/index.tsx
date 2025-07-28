"use client";
import { NAV_ITEMS, sectionId } from "@/libs/constant";
import useScroll from "@/utils/useScroll";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)
  const activeId = useScroll(sectionId);

  const handleMobileMenuOpen = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  return (
    <>
      <div className="hidden md:flex fixed top-0 container mx-auto ml-30 justify-center z-1 py-4 max-w-[85vw] backdrop-blur-xs">
        <Link
          href="/"
          className="absolute dancing-script-font text-3xl top-2 left-0"
        >
          Saarthak
        </Link>
        <div className="flex justify-between gap-16">
          {NAV_ITEMS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`nav-link text-gray-400 hover:text-white ${
                activeId === id ? "text-white" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>


      <div className="md:hidden bg-black p-2 fixed z-100 w-full">
         <div className="flex justify-between">
          <Link
          href="/"
          className=" dancing-script-font text-3xl top-2 left-0"
        >
          Saarthak
        </Link>
          <MdMenu size={30} onClick={handleMobileMenuOpen}/>
        </div> 
      {
        isMobileOpen && <div className="flex flex-col bg-black gap-8 z-2 mt-2">
          {NAV_ITEMS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`nav-link text-gray-400 hover:text-white ${
                activeId === id ? "text-white" : ""
              }`}
              onClick={() => setIsMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      }
      </div>
    </>
  );
};

export default Navbar;
