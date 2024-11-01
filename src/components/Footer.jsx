import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <h2 className="text-2xl font-bold text-center mb-4">Connect with me</h2>
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/cyrus-esfahani-261013225/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/CyrusEsfahani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
          <FaGithub size={30} />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          <FaTwitter size={30} />
        </a>
      </div>
    </footer>
  )
}

export default Footer


