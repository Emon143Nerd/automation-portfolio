import { useCases } from '../data'

export function UseCases() {
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Use cases</span>
        <h1>Where an AI team earns its seat.</h1>
        <p className="lede">
          Pick one loop. Instrument it. Then expand. These are the workflows we install most often for growing
          businesses.
        </p>
      </section>
      <section className="section narrow">
        <div className="use-grid">
          {useCases.map((item) => (
            <article className="tile" key={item.title}>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.55, marginTop: 10 }}>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
