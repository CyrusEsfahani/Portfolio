import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleBlur = (field) => {
    let newErrors = { ...errors }
    if (field === 'name' && !name) {
      newErrors.name = 'Name is required'
    } else if (field === 'email') {
      if (!email) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(email)) {
        newErrors.email = 'Valid email is required'
      }
    } else if (field === 'message' && !message) {
      newErrors.message = 'Message is required'
    }
    setErrors(newErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let valid = true
    let newErrors = { name: '', email: '', message: '' }

    if (!name) {
      newErrors.name = 'Name is required'
      valid = false
    }
    if (!email) {
      newErrors.email = 'Email is required'
      valid = false
    } else if (!validateEmail(email)) {
      newErrors.email = 'Valid email is required'
      valid = false
    }
    if (!message) {
      newErrors.message = 'Message is required'
      valid = false
    }

    setErrors(newErrors)
    if (valid) {
      // Handle form submission (e.g., show a success message)
      alert('Form submitted successfully!')
    }
  }

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
      <form className="max-w-4xl mx-auto px-4 bg-gray-800 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur('name')}
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => handleBlur('message')}
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Submit</button>
      </form>
    </section>
  )
}

export default Contact