import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContactStrip } from '../components/ContactStrip'
import { HeroScene } from '../components/HeroScene'
import { N8nScene } from '../components/N8nScene'
import {
  agents,
  cases,
  contact,
  features,
  howSteps,
  integrations,
  logos,
  stats,
} from '../data'

export function Home() {
  const [agent, setAgent] = useState(0)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setAgent((value) => (value + 1) % agents.length)
    }, 4200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <main>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">From inbox to outcome</span>
            <h1>
              AI Workforce.
              <br />
              Built for Business Teams.
            </h1>
            <p className="lede">
              They read, write and act across CRM, email and chat — so your staff don’t have to.
            </p>
            <div className="hero-actions">
              <Link className="coral-btn" to="/book">
                Contact us
              </Link>
              <a className="ghost-btn" href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
            <ContactStrip compact />
            <article className="agent-card">
              <div className="agent-kicker">Your AI team</div>
              <h3>{agents[agent].name}</h3>
              <p>{agents[agent].role}</p>
              <div className="tags">
                {agents[agent].tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="tags" style={{ marginTop: 12 }}>
                {agents.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={item.name}
                    className={`dot${i === agent ? ' is-on' : ''}`}
                    onClick={() => setAgent(i)}
                  />
                ))}
              </div>
            </article>
          </div>

          <div className="hero-stage">
            <div className="canvas-wrap">
              <HeroScene />
            </div>
            <div className="stat-col">
              {stats.map((item) => (
                <div key={item.label} className="stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee">
          {[...logos, ...logos].map((name, i) => (
            <span key={`${name}-${i}`}>{name}</span>
          ))}
        </div>
      </div>

      <section className="n8n-section">
        <div className="n8n-copy">
          <span className="eyebrow">Orchestrated in n8n</span>
          <h2>Every agent runs on a living workflow.</h2>
          <p className="lede">
            We design, deploy, and tune n8n graphs that move work between mail, CRM, chat, and your AI models — with a
            human checkpoint wherever judgment still matters.
          </p>
          <ul className="n8n-points">
            <li>Trigger from Gmail, Slack, forms, or webhooks</li>
            <li>Branch, enrich, and write back without custom glue</li>
            <li>Visible runs, retries, and an audit trail operators trust</li>
          </ul>
        </div>
        <div className="n8n-stage">
          <N8nScene />
          <p className="n8n-hint">Hover a node — watch the pulse travel the graph</p>
        </div>
      </section>

      <section className="section dark">
        <div className="two-col dark-inner">
          <div>
            <span className="eyebrow">From inbox to outcome</span>
            <h2 className="display">See how your AI team gets the job done.</h2>
            <p className="lede">
              Nexa deploys dedicated agents into the tools you already run — giving the business real-time intelligence,
              automation, and a clean audit trail.
            </p>
            <div className="accordion">
              {howSteps.map((item, i) => (
                <button key={item.id} className={`acc-item${i === step ? ' is-open' : ''}`} type="button" onClick={() => setStep(i)}>
                  <strong>
                    {item.title}
                    <span>{i === step ? '–' : '+'}</span>
                  </strong>
                  {i === step ? <p>{item.body}</p> : null}
                </button>
              ))}
            </div>
          </div>
          <div className="board" aria-hidden="true">
            <div className="node-row">
              {integrations.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="orbit" />
            <div className="core" />
            <div className="summary-card">
              <div className="agent-kicker">Work in motion</div>
              {['Lead captured', 'Reply drafted', 'CRM updated'].map((row, i) => (
                <div className="row" key={row}>
                  <span>{row}</span>
                  <div className="bar">
                    <i style={{ width: `${88 - i * 18}%`, animationDelay: `${i * 0.2}s` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section narrow">
        <span className="eyebrow">Why Nexa</span>
        <h2 className="display tight">Key features that power a smarter operation</h2>
        <p className="lede">
          Task-specific agents drop into your workflow — handling conversations, quotes, reporting, and internal
          coordination.
        </p>
        <div className="bento">
          {features.map((item) => (
            <article key={item.id} className={`card lift ${item.kind === 'photo' ? item.tone : ''}`}>
              {item.kind === 'stack' ? (
                <div className="app-grid">
                  {['Gmail', 'Slack', 'HubSpot', 'Sheets', 'Notion', 'Voice'].map((app) => (
                    <div className="app" key={app}>
                      {app}
                    </div>
                  ))}
                </div>
              ) : null}
              {item.kind === 'multi' ? (
                <div className="modes">
                  {['Voice', 'Chat', 'PDF'].map((mode) => (
                    <div key={mode}>{mode}</div>
                  ))}
                </div>
              ) : null}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section narrow">
        <span className="eyebrow">Selected work</span>
        <h2 className="display">Proof, not pitch decks.</h2>
        <div className="work-grid">
          {cases.map((item) => (
            <Link className="tile lift" key={item.slug} to="/work">
              <span>
                {item.client} · {item.sector}
              </span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <strong>{item.result}</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
