import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const Project = ({ image, title, deployedLink, githubLink, technologies = [], description = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="max-w-md rounded-xl shadow-2xl bg-gray-800 overflow-hidden border-2 border-cyan-500/50 transition-all duration-500 hover:shadow-cyan-500/20 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with overlay */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} 
        />
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2">{title}</h3>
          
          {/* Technologies tags */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs font-medium bg-purple-600/80 text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Content area */}
      <div className="p-6 bg-gradient-to-b from-gray-800 to-gray-900">
        {/* Description */}
        {description && (
          <p className="text-gray-300 text-sm mb-6">{description}</p>
        )}
        
        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href={deployedLink}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> 
            <span>Live Demo</span>
          </a>
          
          <a
            href={githubLink}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string
};

export default Project;