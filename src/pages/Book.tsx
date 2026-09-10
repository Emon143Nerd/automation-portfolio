import { useState, type FormEvent } from 'react'
import { ContactIcons } from '../components/ContactIcons'
import { contact, profile } from '../data'

export function Book() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Book a call</span>
        <h1>Tell me the busywork you want off the desk.</h1>
        <p className="lede">
          A 30-minute working session with {profile.name}. We’ll map one inbox, one CRM, and the first n8n workflow that
          should live there.
        </p>
        <ContactIcons />
      </section>
      <section className="section narrow book-grid">
        {sent ? (
          <p className="success">
            Request received. Reach me anytime on WhatsApp or {contact.email}.
          </p>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <input name="name" required placeholder="Name" />
            <input name="email" type="email" required placeholder="Work email" />
            <input name="company" placeholder="Company (optional)" />
            <select name="focus" defaultValue="sales">
              <option value="sales">Revenue follow-up</option>
              <option value="support">Customer inbox</option>
              <option value="ops">Internal ops</option>
              <option value="finance">Finance ops</option>
            </select>
            <textarea name="notes" rows={5} placeholder="What’s eating the most hours today?" />
            <button className="coral-btn" type="submit">
              Request a call
            </button>
          </form>
        )}
        <aside className="contact-card">
          <div className="agent-kicker">Direct line</div>
          <h2>Prefer to skip the form?</h2>
          <p className="lede">Call, WhatsApp, or email me. I read every message myself.</p>
          <ContactIcons />
        </aside>
      </section>
    </main>
  )
}
