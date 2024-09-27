import React from 'react'
import '../styles/Resume.css'

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <div className="resume-section">
          <h3>Education</h3>
          <p>University of XYZ, Bachelor of Science in Computer Science, 2020</p>
        </div>
        <div className="resume-section">
          <h3>Experience</h3>
          <p>Software Developer at ABC Corp, 2021 - Present</p>
        </div>
        <div className="resume-section">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Resume