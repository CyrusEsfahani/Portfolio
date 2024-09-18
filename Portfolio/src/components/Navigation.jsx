import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        
        <nav>
          <NavLink to="/about" className= {({isActive}) => isActive? "active":"link"}>About Me</NavLink>
          <NavLink to="/portfolio" className= {({isActive}) => isActive? "active":"link"}>Porfolio</NavLink>
          <NavLink to="/resume" className= {({isActive}) => isActive? "active":"link"}>Resume</NavLink>
          <NavLink to="/contact" className= {({isActive}) => isActive? "active":"link"}>Contact Me</NavLink>
        </nav>
      
    )
    }

    export default Navigation;