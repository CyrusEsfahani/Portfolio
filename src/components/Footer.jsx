import React from 'react';
import { FaLinkedin, FaGithub, FaArrowUp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 py-6"> {/* Further reduced padding */}
        {/* Social Links Section */}
        <div className="flex flex-col items-center space-y-3"> {/* Tightened spacing */}
          <h2 className="text-lg font-semibold text-gray-300 mb-1"> {/* Smaller heading */}
            Let's Connect & Collaborate
          </h2>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/cyrus-esfahani-261013225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-400 transition-all duration-300 transform hover:scale-125 hover:rotate-6"
            >
              <FaLinkedin size={28} /> {/* Larger icons */}
            </a>
            
            <a 
              href="https://github.com/CyrusEsfahani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-400 transition-all duration-300 transform hover:scale-125 hover:rotate-6"
            >
              <FaGithub size={28} />
            </a>
            
            <a 
              href="mailto:esfahani.cyrus@gmail.com"
              className="text-sky-500 hover:text-sky-400 transition-all duration-300 transform hover:scale-125 hover:rotate-6"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="mt-4 mx-auto flex items-center text-sky-500 hover:text-sky-400 transition-all duration-300"
        >
          <FaArrowUp className="mr-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-125" />
          <span className="text-sm font-medium">Back to Top</span>
        </button>

        {/* Copyright Text */}
        <div className="mt-4 pt-2 text-center"> {/* Even tighter spacing */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Cyrus Esfahani. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Built with React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;