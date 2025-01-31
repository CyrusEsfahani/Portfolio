import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Social Links Section */}
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">
            Let's Connect & Collaborate
          </h2>
          
          <div className="flex space-x-8">
            <a 
              href="https://www.linkedin.com/in/cyrus-esfahani-261013225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            
            <a 
              href="https://github.com/CyrusEsfahani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            
            <a 
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="mt-8 mx-auto flex items-center text-gray-400 hover:text-white transition-all duration-300"
        >
          <FaArrowUp className="mr-2 transition-transform duration-300 hover:-translate-y-1" />
          <span className="text-sm font-medium">Back to Top</span>
        </button>

        {/* Copyright Text */}
        <div className="mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Cyrus Esfahani. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Built with React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



