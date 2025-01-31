import { Parallax } from "react-parallax";
import Portfolio from './Portfolio.jsx'
import Resume from './Resume.jsx'
import TextChange from './TextChange.jsx'
import AboutMe from "./AboutMe.jsx";
import Container from "@mui/material/Container";

const Home = () => {
    return (
        <Container component= "main" sx={{width:"90%", margin: "0 auto"}}>
          <TextChange/>
          <AboutMe/>
        <Parallax bgImage="/path/to/portfolio-bg.jpg" strength={500}>
          <section id="portfolio">
            {/* <Portfolio /> */}
          </section>
        </Parallax>
        <Parallax bgImage="/path/to/resume-bg.jpg" strength={500}>
          <section id="resume">
            <Resume />
          </section>
        </Parallax>
      </Container>
    )
}

export default Home

