import { useState } from 'react'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_KEY)
    formData.append('subject', `Portfolio message from ${formData.get('name')}`)

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const result = await response.json()
      if (!result.success) throw new Error(result.message)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="container contact-grid">
        <div className="contact-card fade-in">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Feel free to reach out for collaborations, opportunities, or just to say hello.</p>

          <div className="social-links">
            <a href="mailto:ahmad0903998@gmail.com">Email</a>
            <a href="https://github.com/AhmadImam14" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/137_legend" target="_blank" rel="noreferrer">Twitter/X</a>
          </div>
        </div>

        <div className="contact-card fade-in">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message" required />
            <input type="checkbox" name="botcheck" className="honeypot" tabIndex="-1" autoComplete="off" />
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="form-status" role="status">Thanks! Your message has been sent.</p>}
            {status === 'error' && (
              <p className="form-status form-status-error" role="alert">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
