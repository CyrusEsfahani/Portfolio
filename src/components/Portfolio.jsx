import React from 'react';
import Project from './Project';
import MoreProjects from './MoreProjects';

const projects = [
  {
    image: '/7-wonders.jpg', // Update this path as needed
    title: '7 Wonders of the World',
    deployedLink: 'https://dolaes.github.io/Interactive-7-Wonders/',
    githubLink: 'https://github.com/CyrusEsfahani/7-wonders-of-the-world',
  },
];

const Portfolio = () => {
  return (
    <section className="py-12 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Projects</h2>
        <div className="flex justify-center">
          <Project {...projects[0]} />
        </div>
        <div className="mt-12">
          <MoreProjects />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;