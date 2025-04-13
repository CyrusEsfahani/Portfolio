import React, { useEffect, useState } from 'react';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaCode, FaCloud } from 'react-icons/fa';

const MoreProjects = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Animate progress bar to 70% on component mount
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prevProgress => {
          const newProgress = prevProgress + 1;
          if (newProgress >= 70) {
            clearInterval(interval);
            return 70;
          }
          return newProgress;
        });
      }, 20);
      
      return () => clearInterval(interval);
    }, 500); // Small delay before starting animation
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-2xl text-center w-full border border-purple-600 relative overflow-hidden mb-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-80"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
        
        {/* Progress bar container */}
        <div className="w-full bg-gray-700 rounded-full h-5 mb-8 overflow-hidden shadow-inner">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 h-5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Technology icons with bounce animation */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          <div className="icon-wrapper group">
            <div className="p-4 bg-gray-700 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
              <FaJs className="text-yellow-400 text-4xl animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
          </div>
          
          <div className="icon-wrapper group">
            <div className="p-4 bg-gray-700 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
              <FaReact className="text-cyan-400 text-4xl animate-bounce" style={{ animationDuration: '2.2s' }} />
            </div>
          </div>
          
          <div className="icon-wrapper group">
            <div className="p-4 bg-gray-700 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
              <FaNodeJs className="text-green-500 text-4xl animate-bounce" style={{ animationDuration: '2.4s' }} />
            </div>
          </div>
          
          <div className="icon-wrapper group">
            <div className="p-4 bg-gray-700 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
              <FaCode className="text-purple-500 text-4xl animate-bounce" style={{ animationDuration: '2.6s' }} />
            </div>
          </div>
          
          <div className="icon-wrapper group">
            <div className="p-4 bg-gray-700 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
              <FaDatabase className="text-purple-400 text-4xl animate-bounce" style={{ animationDuration: '2.8s' }} />
            </div>
          </div>
          
          <div className="icon-wrapper group">
            <div className="p-4 bg-gray-700 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
              <FaCloud className="text-blue-500 text-4xl animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
          </div>
        </div>
        
        {/* Descriptive text */}
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-sm">
          I'm currently working on several exciting projects that showcase my full-stack development 
          skills with React, Node.js, databases, cloud services, and more. Check back soon to see my latest work!
        </p>
      </div>
    </div>
  );
};

export default MoreProjects;