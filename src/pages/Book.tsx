import { useState, type FormEvent } from 'react'
import { ContactStrip } from '../components/ContactStrip'
import { contact } from '../data'

export function Book() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Book a demo</span>
        <h1>Tell us the busywork you want off the desk.</h1>
        <p className="lede">
          A 30-minute working session. We’ll map one inbox, one CRM, and the first n8n workflow that should live there.
        </p>
        <ContactStrip />
      </section>
      <section className="section narrow book-grid">
        {sent ? (
          <p className="success">
            Request received. Reach us anytime on WhatsApp at {contact.phone} or email {contact.emails[0]}.
          </p>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <input name="name" required placeholder="Name" />
            <input name="email" type="email" required placeholder="Work email" />
            <input name="company" required placeholder="Company" />
            <select name="focus" defaultValue="sales">
              <option value="sales">Revenue follow-up</option>
              <option value="support">Customer inbox</option>
              <option value="ops">Internal ops</option>
              <option value="finance">Finance ops</option>
            </select>
            <textarea name="notes" rows={5} placeholder="What’s eating the most hours today?" />
            <button className="coral-btn" type="submit">
              Request a demo
            </button>
          </form>
        )}
        <aside className="contact-card">
          <div className="agent-kicker">Direct line</div>
          <h2>Prefer to skip the form?</h2>
          <p className="lede">Call, WhatsApp, or mail the studio. Sales and project inboxes both land with the same team.</p>
          <ContactStrip />
        </aside>
      </section>
    </main>
  )
}
