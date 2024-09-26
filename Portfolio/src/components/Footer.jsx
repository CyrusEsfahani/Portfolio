import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import "../styles/footer.css";


const Footer = () => {
  return (
    <footer>
      <h2>Connect with me</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/cyrus-esfahani-261013225/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/CyrusEsfahani" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
      </div>
    </footer>
  )
}

export default Footer


