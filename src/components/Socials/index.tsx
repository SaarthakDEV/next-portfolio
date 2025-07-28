import { Social } from "@/libs/types";
import React from "react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";


const Socials = () => {
  const SOCIAL_LINKS:Social[] = [
    {
      id: "twitter",
      icon: <FaXTwitter size={25} className="cursor-pointer" />,
      href: "https://twitter.com",
    },
    {
      id: "linkedin",
      icon: <FaLinkedinIn size={25} className="cursor-pointer" />,
      href: "https://linkedin.com",
    },
    {
      id: "github",
      icon: <FaGithub size={25} className="cursor-pointer" />,
      href: "https://github.com",
    },
    {
      id: "instagram",
      icon: <FaInstagram size={25} className="cursor-pointer" />,
      href: "https://instagram.com", 
    },
  ];
  return (
    <div className="my-20 text-lg">
      Let's Connect on my socials!!
      <div className="flex justify-center mt-4 gap-8">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
