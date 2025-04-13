import React from 'react';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

const MoreProjects = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full border border-purple-600">
      <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
      <div className="w-full bg-gray-700 rounded-full h-4 mb-4 overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-4 rounded-full progress-bar"></div>
      </div>
      <div className="flex justify-center space-x-6">
        <div className="icon-wrapper">
          <FaJs className="text-yellow-500 text-4xl animate-hop" />
        </div>
        <div className="icon-wrapper">
          <FaReact className="text-cyan-500 text-4xl animate-hop" style={{ animationDelay: '0.2s' }} />
        </div>
        <div className="icon-wrapper">
          <FaNodeJs className="text-green-500 text-4xl animate-hop" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;