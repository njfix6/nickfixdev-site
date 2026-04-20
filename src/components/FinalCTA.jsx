export default function FinalCTA({ bookingUrl }) {
  return (
    <section className="final-cta">
      <p className="sub">Ready to know your limits?</p>
      <a
        className="btn btn-sm"
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a meeting →
      </a>
    </section>
  )
}
