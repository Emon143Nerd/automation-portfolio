import { contact } from '../data'

export function ContactStrip({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`contact-strip${compact ? ' is-compact' : ''}`}>
      <a href={contact.phoneHref}>{contact.phone}</a>
      <a href={contact.whatsapp} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
      {contact.emails.map((email) => (
        <a key={email} href={`mailto:${email}`}>
          {email}
        </a>
      ))}
      <a href={contact.facebook} target="_blank" rel="noreferrer">
        Facebook
      </a>
    </div>
  )
}
