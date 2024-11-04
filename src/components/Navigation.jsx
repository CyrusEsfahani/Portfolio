import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import * as Scroll from 'react-scroll'
import { NavLink as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/material/Menu'


const Navigation = () => {
  const path = useLocation().pathname
  const location = path.split('/')[1]
  const navigate = useNavigate()
  const scroller = Scroll.scroller


  const goToPageAndScroll = async (selector) => {
    navigate(`/`)
    scroller.scrollTo(selector, {
      duration: 500,
      smooth: true
    })
  

  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="flex space-x-4">
      { location !== 'contact' ? (


      ): (

      ) }
      <Link to="about" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">About Me</Link>
      <Link to="portfolio" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">Portfolio</Link>
      <Link to="resume" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">Resume</Link>
      <Link to="contact" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">Contact</Link>
    </nav>
  )
}
}

export default Navigation
