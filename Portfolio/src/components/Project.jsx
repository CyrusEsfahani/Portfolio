import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Project.css'

const Project = ({ image, title, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  )
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
}

export default Project