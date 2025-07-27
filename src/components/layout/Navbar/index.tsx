"use client";
import { NAV_ITEMS, sectionId } from "@/libs/constant";
import useScroll from "@/utils/useScroll";
import Link from "next/link";

const Navbar: React.FC = () => {
  const activeId = useScroll(sectionId);
  return (
    <>
      <div className="fixed top-0 container mx-auto ml-30 flex justify-center z-1 py-4 max-w-[85vw] backdrop-blur-xs">
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
    </>
  );
};

export default Navbar;
