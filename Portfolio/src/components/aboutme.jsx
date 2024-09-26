import React from 'react'
import '../styles/aboutme.css'

const AboutMe = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-me-content">
        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" className="profile-picture" />
        <p>Hello, I am Cyrus Esfahani.</p>
        <p>I am a Full Stack Developer.</p>
        <p>I love coding and solving problems.</p>
        <p>Welcome to my portfolio!</p>
      </div>
    </section>
  )
}

export default AboutMe;