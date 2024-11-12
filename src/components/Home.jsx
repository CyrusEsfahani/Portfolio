import { Parallax } from "react-parallax";
import Portfolio from './Portfolio.jsx'
import Resume from './Resume.jsx'
import TextChange from './TextChange.jsx'


const Home = () => {
    return (
        <main>
          <TextChange/>
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
      </main>
    )
}

export default Home

