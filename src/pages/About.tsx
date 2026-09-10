import { ContactIcons } from '../components/ContactIcons'
import { profile } from '../data'

export function About() {
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">About</span>
        <h1>
          {profile.name}
          <br />
          {profile.title}
        </h1>
        <p className="lede">
          I am an expert AI automation engineer focused on n8n. I take messy inboxes, CRM loops, and ops handoffs and turn
          them into reliable workflows with human checkpoints — production systems, not demo graphs.
        </p>
        <ContactIcons />
      </section>
      <section className="section narrow two-col">
        <div>
          <h2>How I work</h2>
          <p className="lede">
            Automation should be obvious in under ten seconds. If an operator needs a workshop to understand the agent,
            the design failed.
          </p>
        </div>
        <div className="use-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {[
            ['Discover', 'Map the messy work: inboxes, handoffs, and the tribal rules nobody wrote down.'],
            ['Design', 'Name the agents, the triggers, and the human checkpoints before a single workflow ships.'],
            ['Deploy', 'Connect the stack in n8n, instrument the loop, and watch the first week of live traffic.'],
            ['Tune', 'Keep a weekly cadence. Workflows improve the same way teams do — with notes, not magic.'],
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
