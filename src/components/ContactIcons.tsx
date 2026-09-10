import { useEffect, useId, useRef, useState } from 'react'
import { contact } from '../data'

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6.5 3.8h2.2l1.1 3-1.6 1.1a12.5 12.5 0 0 0 6.4 6.4l1.1-1.6 3 1.1v2.2c0 .7-.6 1.3-1.3 1.3C9.7 17.3 3.7 11.3 3.7 5.1c0-.7.6-1.3 1.3-1.3Z" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M12 3.2A8.7 8.7 0 0 0 4.6 16.3L3.7 20.3l4.1-.9A8.7 8.7 0 1 0 12 3.2Zm4.8 12.4c-.2.6-1.1 1.1-1.6 1.2-.5.1-1.1.2-3.4-.7-2.2-1-3.6-3.4-3.7-3.5s-1.2-1.6-1.2-3 .6-2.1 1-2.4c.3-.3.7-.3.9-.3h.7c.2 0 .5 0 .7.6l1 2.2c.1.2 0 .5-.2.7l-.5.6c-.2.2-.4.4-.2.8.7 1.1 1.6 1.9 2.8 2.4.3.1.6.1.8-.1l.7-.8c.2-.2.5-.2.8-.1l2 .9c.6.2.7.5.5 1.1Z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M14.2 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2h-2.5v2.8H11V21h3.2Z" />
    </svg>
  )
}

export const contactItems = [
  { id: 'phone', href: contact.phoneHref, label: 'Call', icon: <IconPhone />, external: false },
  { id: 'whatsapp', href: contact.whatsapp, label: 'WhatsApp', icon: <IconWhatsApp />, external: true },
  { id: 'mail', href: `mailto:${contact.email}`, label: contact.email, icon: <IconMail />, external: false },
  { id: 'facebook', href: contact.facebook, label: 'Facebook', icon: <IconFacebook />, external: true },
]

export function ContactIcons({ className = '' }: { className?: string }) {
  return (
    <div className={`contact-icons ${className}`.trim()}>
      {contactItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="contact-icon"
          aria-label={item.label}
          title={item.label}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
        >
          {item.icon}
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  )
}

export function ContactMenu() {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('pointerdown', onPointer)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={`contact-menu${open ? ' is-open' : ''}`} ref={root}>
      <button
        type="button"
        className="contact-trigger"
        aria-label="Open contacts"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="8" r="3.1" />
          <path d="M5.6 19.2c.8-3 3.3-5 6.4-5s5.6 2 6.4 5" />
        </svg>
      </button>
      <div id={menuId} className="contact-panel" hidden={!open} role="menu">
        <p className="agent-kicker">Contacts</p>
        <ContactIcons />
      </div>
    </div>
  )
}
