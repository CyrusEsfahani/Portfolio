import React from 'react'
import Project from './Project'

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
    deployedLink: 'https://github.com/CyrusEsfahani/Employee-Tracker',
    githubLink: 'https://github.com/CyrusEsfahani/Employee-Tracker',
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-900 text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Portfolio</h2>
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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