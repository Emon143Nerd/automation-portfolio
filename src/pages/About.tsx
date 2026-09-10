import { ContactStrip } from '../components/ContactStrip'

export function About() {
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">About</span>
        <h1>An AI workforce, designed like a product.</h1>
        <p className="lede">
          Nexa is the automation studio inside a larger agency. We design, deploy, and tune n8n-powered agents that sit
          in the tools your team already lives in — with the same visual language you’ll see across the parent brand later.
        </p>
        <ContactStrip />
      </section>
      <section className="section narrow two-col">
        <div>
          <h2>What we believe</h2>
          <p className="lede">
            Automation should feel calm, corporate, and obvious in under ten seconds. If an operator needs a workshop to
            understand the agent, the design failed.
          </p>
        </div>
        <div className="use-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {[
            ['Discover', 'Map the messy work: inboxes, handoffs, and the tribal rules nobody wrote down.'],
            ['Design', 'Name the agents, the triggers, and the human checkpoints before a single workflow ships.'],
            ['Deploy', 'Connect the stack, instrument the loop, and watch the first week of live traffic.'],
            ['Tune', 'Keep a weekly cadence. Agents improve the same way teams do — with notes, not magic.'],
          ].map(([title, body]) => (
            <article className="tile" key={title}>
              <h3>{title}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.55 }}>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
