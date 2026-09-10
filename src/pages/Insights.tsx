import { posts } from '../data'

export function Insights() {
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Insights</span>
        <h1>Notes from the automation floor.</h1>
        <p className="lede">
          Short field notes on deploying agents inside real companies — written for operators, not model-watchers.
        </p>
      </section>
      <section className="section narrow">
        <div className="post-grid">
          {posts.map((item) => (
            <article className="tile" key={item.title}>
              <span>{item.date}</span>
              <h3 style={{ margin: '12px 0 10px' }}>{item.title}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.55 }}>{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
