import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ image, title, deployedLink, githubLink }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-gray-900 border border-cyan-500 p-6 text-center transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-xl font-bold text-white mt-4">{title}</h3>
      <div className="mt-4 flex justify-center space-x-4">
        <a
          href={deployedLink}
          className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed Application
        </a>
        <a
          href={githubLink}
          className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;