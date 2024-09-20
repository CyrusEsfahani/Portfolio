import React, { useState } from 'react'
export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({ name: '', email: '', message: '' })

// export default function Contact() {
    // return (
    //     <section id="contact">
    //         <h2>Contact Me</h2>
    //         <p>
    //             Feel free to reach out to me at
                
    //     </p>
    //     </section>
    // )};
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
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit">Submit</button>
            </form>
        </section>
        )
    }