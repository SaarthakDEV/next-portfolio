import React from 'react'
import { FaXTwitter, FaLinkedinIn, FaGithub, FaInstagram   } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="mt-20 text-lg">
      Let's Connect on my socials!!
      <div className="flex justify-center mt-4 gap-8">
        <FaXTwitter size={25}/>
        <FaLinkedinIn size={25} />
        <FaGithub size={25}/>
        <FaInstagram size={25}/>
      </div>
    </div>
  )
}

export default Socials
