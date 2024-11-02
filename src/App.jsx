import Navigation from './components/Navigation.jsx'
import { Outlet } from 'react-router-dom'
import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Portfolio from './components/Portfolio.jsx'
import Resume from './components/Resume.jsx'
import AboutMe from './components/AboutMe.jsx'
import { Parallax } from 'react-parallax'
import tailwind from './tailwind.css'
import './App.css'


function App() {
return (
<div>
      <Header />
      <main>
        <Parallax bgImage="/path/to/about-bg.jpg" strength={500}>
          <section id="about">
            <AboutMe />
          </section>
        </Parallax>
        <Parallax bgImage="/path/to/portfolio-bg.jpg" strength={500}>
          <section id="portfolio">
            <Portfolio />
          </section>
        </Parallax>
        <Parallax bgImage="/path/to/resume-bg.jpg" strength={500}>
          <section id="resume">
            <Resume />
          </section>
        </Parallax>
        <Parallax bgImage="/path/to/contact-bg.jpg" strength={500}>
          <section id="contact">
            <Contact />
          </section>
        </Parallax>
      </main>
      <Footer />
    </div>
  )
}
export default App
