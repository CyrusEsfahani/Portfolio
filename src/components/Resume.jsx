import React from 'react'

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-900 text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Resume</h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          <p>University of XYZ, Bachelor of Science in Computer Science, 2020</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          <p>Software Developer at ABC Corp, 2021 - Present</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Skills</h3>
          <ul className="list-disc list-inside">
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