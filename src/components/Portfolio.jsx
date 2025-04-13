import React from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import MoreProjects from './MoreProjects';

const projects = [
  {
    image: '/7-wonders.jpg',
    title: '7 Wonders of the World',
    deployedLink: 'https://dolaes.github.io/Interactive-7-Wonders/',
    githubLink: 'https://github.com/CyrusEsfahani/7-wonders-of-the-world',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
    description: 'An interactive web application that lets users explore the seven wonders of the world through an immersive interface and detailed information about each historical site.'
  },
  // You can add more projects here in the future
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Header section with gradient text */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore my portfolio of web development projects showcasing modern technologies and creative solutions.
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center">
              <Project {...project} />
            </div>
          ))}
          
          {/* Show placeholder projects if you have less than 3 real projects */}
          {projects.length < 3 && (
            <div className="flex justify-center opacity-60 hover:opacity-75 transition-opacity">
              <div className="max-w-md rounded-xl shadow-lg bg-gray-800 border border-gray-700 p-6 text-center h-full flex flex-col justify-center items-center">
                <div className="w-16 h-16 rounded-full bg-gray-700 mb-4 flex items-center justify-center">
                  <span className="text-2xl text-gray-500">?</span>
                </div>
                <h3 className="text-xl font-bold text-gray-400">Future Project</h3>
                <p className="text-gray-500 mt-2">Coming soon...</p>
              </div>
            </div>
          )}
        </div>
        
        {/* More Projects section */}
        <div className="mt-12">
          <MoreProjects />
        </div>
        
        {/* Call-to-action section */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 mb-6">
            Interested in collaborating or want to see more of my work?
          </p>
          
          {/* Changed from <a href> to <Link to> for proper React Router navigation */}
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;