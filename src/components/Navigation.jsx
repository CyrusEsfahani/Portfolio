import React from 'react'
import { Link } from 'react-scroll'

const Navigation = () => {
  return (
    <nav className="flex space-x-4">
      <Link to="about" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">About Me</Link>
      <Link to="portfolio" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">Portfolio</Link>
      <Link to="resume" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">Resume</Link>
      <Link to="contact" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">Contact</Link>
    </nav>
  )
}

export default Navigation
