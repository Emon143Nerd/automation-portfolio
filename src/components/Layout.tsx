import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { contact, nav } from '../data'
import { ContactIcons, ContactMenu } from './ContactIcons'

export function Layout() {
  const [open, setOpen] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0, hover: false })
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    document.body.classList.add('has-custom-cursor')
    const move = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const hover = Boolean(target.closest('a, button, input, textarea, select'))
      setCursor({ x: e.clientX, y: e.clientY, hover })
    }
    window.addEventListener('pointermove', move)
    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', move)
    }
  }, [])

  return (
    <div className="shell">
      <div className="grain" aria-hidden="true" />
      {cursor.x > 0 ? (
        <div className={`cursor${cursor.hover ? ' is-hover' : ''}`} style={{ left: cursor.x, top: cursor.y }} />
      ) : null}
      <header className={`nav${open ? ' open' : ''}`}>
        <div className="nav-left">
          <NavLink to="/" className="brand" aria-label="Salesfixr home">
            <span className="logo">SF</span>
            <span className="wordmark">Salesfixr</span>
          </NavLink>
          <nav className="nav-links">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="nav-right">
          <ContactMenu />
          <NavLink className="ghost-btn" to="/book">
            Book a demo
          </NavLink>
          <button className="menu-btn" type="button" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
            ☰
          </button>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div>
          <strong>Salesfixr</strong> — AI automation for businesses, orchestrated in n8n.
          <ContactIcons />
        </div>
        <div>© {new Date().getFullYear()} Salesfixr</div>
      </footer>
      <a className="wa-fab" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
          <path d="M12 3.2A8.7 8.7 0 0 0 4.6 16.3L3.7 20.3l4.1-.9A8.7 8.7 0 1 0 12 3.2Z" />
        </svg>
      </a>
    </div>
  )
}
