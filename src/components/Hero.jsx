export default function Hero({ bookingUrl, children }) {
  return (
    <section>
      <p className="eyebrow">service · flagship offering</p>
      <h1 className="h1--icon">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="14 7 21 7 21 14" />
        </svg>
        Scaling Readiness Assessment
      </h1>
      {children}
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
