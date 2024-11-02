import React from 'react'

const AboutMe = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
      <div className="max-w-4xl mx-auto text-center">
        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg" />
        <p className="text-xl mb-4">Hello, I am Cyrus Esfahani.</p>
        <p className="text-xl mb-4">I am a Full Stack Developer.</p>
        <p className="text-xl mb-4">I love coding and solving problems.</p>
        <p className="text-xl">Welcome to my portfolio!</p>
      </div>
    </section>
  )
}

export default AboutMe