const products = [
  {
    name: 'MPSC Planner',
    description:
      'Preparation resources for Maharashtra Public Service Commission aspirants, including MCQs, current affairs, study material, exam guides, and previous-year papers.',
    href: 'https://www.mpscplanner.com',
    accent: 'mpsc',
  },
  {
    name: 'UPSC Planner',
    description:
      'Preparation resources for UPSC aspirants, including MCQs, current affairs, study material, exam guides, and previous-year papers.',
    href: 'https://www.upscplanner.com',
    accent: 'upsc',
  },
]

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container">
          <p className="brand-name">PlannerEdge Labs</p>
          <p className="brand-subtitle">Focused tools for serious exam preparation.</p>
        </div>
      </header>

      <main className="container main-content">
        <section className="intro" aria-labelledby="page-heading">
          <h1 id="page-heading">Exam preparation, thoughtfully built.</h1>
          <p>
            PlannerEdge Labs creates focused digital products that help aspirants prepare with
            clarity, consistency, and confidence.
          </p>
        </section>

        <section className="products" aria-label="PlannerEdge Labs products">
          {products.map((product) => (
            <article className={`product-card ${product.accent}`} key={product.name}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <a className="product-link" href={product.href}>
                Visit {product.name}
              </a>
            </article>
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>© PlannerEdge Labs</p>
          <nav aria-label="Product links">
            <a href="https://www.mpscplanner.com">mpscplanner.com</a>
            <a href="https://www.upscplanner.com">upscplanner.com</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
