import React from 'react'

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header>
      <h1>Cyrus Esfahani</h1>
      <nav>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About Me</a>
        <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => setActiveSection('portfolio')}>Portfolio</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</a>
        <a href="#resume" className={activeSection === 'resume' ? 'active' : ''} onClick={() => setActiveSection('resume')}>Resume</a>
      </nav>
    </header>
  )
}

export default Header