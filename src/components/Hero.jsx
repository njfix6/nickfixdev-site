export default function Hero({ bookingUrl }) {
  return (
    <section>
      <p className="eyebrow">service · flagship offering</p>
      <h1>Scaling readiness assessment</h1>
      <p className="sub">
        Know exactly what will break first, when it will break, and what
        you're overpaying for today.
      </p>
      <div className="pills">
        <span className="pill">$8,500 flat</span>
        <span className="pill">delivered in 5 business days</span>
      </div>
      <a
        className="btn btn-block"
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a meeting →
      </a>
    </section>
  )
}
