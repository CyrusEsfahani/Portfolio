import React from 'react'
import PropTypes from 'prop-types'

const Project = ({ image, title, deployedLink, githubLink }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <img src={image} alt={`${title} screenshot`} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <div className="flex justify-between">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Deployed Application</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub Repository</a>
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