import { cases } from '../data'

export function Work() {
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Work</span>
        <h1>Business systems, running themselves.</h1>
        <p className="lede">
          A short set of engagements that show how Salesfixr agents take over follow-ups, intake, and finance ops — without a
          freight or logistics story in sight.
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
