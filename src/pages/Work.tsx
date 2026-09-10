import { cases } from '../data'

export function Work() {
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Work</span>
        <h1>Systems I have put on autopilot.</h1>
        <p className="lede">
          Selected n8n engagements — follow-ups, intake, and finance ops — from my work as an AI automation engineer.
        </p>
      </section>
      <section className="section narrow">
        <div className="case-grid">
          {cases.map((item) => (
            <article className="tile" key={item.slug}>
              <span>
                {item.client} · {item.sector}
              </span>
              <h3 style={{ margin: '14px 0 10px', fontSize: 26 }}>{item.title}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.55 }}>{item.summary}</p>
              <strong style={{ display: 'block', marginTop: 18 }}>{item.result}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
