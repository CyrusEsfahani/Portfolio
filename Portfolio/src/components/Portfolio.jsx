import React from 'react'
import Project from './Project'
import '../styles/Portfolio.css'



const projects = [
  {
    image: '/path/to/project1-image.jpg',
    title: '7 Wonders of the World',
    deployedLink: 'https://dolaes.github.io/Interactive-7-Wonders/',
    githubLink: 'https://github.com/CyrusEsfahani/7-wonders-of-the-world'
  },
  {
    image: '/path/to/project2-image.jpg',
    title: 'Generate Your ReadMe',
    deployedLink: 'https://github.com/CyrusEsfahani/Generate-Your-ReadMe',
    githubLink: 'https://github.com/CyrusEsfahani/Generate-Your-ReadMe',
  },
    {
        image: '/path/to/project3-image.jpg',
        title: 'Employee Tracker',
        deployedLink: 'https://github.com/CyrusEsfahani/employee-tracker',
        githubLink: 'https://github.com/CyrusEsfahani/employee-tracker',
    },
    {
        image: '/path/to/project4-image.jpg',
        title: 'Weather App',
        deployedLink: 'https://github.com/CyrusEsfahani/Weather-app',
        githubLink: 'https://github.com/CyrusEsfahani/Weather-app',
    }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            title={project.title}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio