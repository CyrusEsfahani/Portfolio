import React, { useState } from 'react';
import '../styles/contact.css';

export default function Contact() {
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
    <section id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur('name')}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => handleBlur('message')}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}