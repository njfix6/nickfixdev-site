import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Credibility from '../components/Credibility.jsx'
import Footer from '../components/Footer.jsx'
import { BOOKING_URL, EMAIL } from '../config.js'

export default function Why() {
  return (
    <main className="page">
      <Header />
      <p className="eyebrow">
        <Link to="/">← back</Link>
      </p>
      <h1>Why choose me?</h1>
      <p className="sub">
        Short version: I've been on the other side of this problem, at scale,
        for a long time.
      </p>
      <Credibility />
      <p>
        Most scaling assessments come from generalist consultants who
        learned infrastructure from a book. I learned it by operating
        production systems under real load, with real users, with real
        money on the line.
      </p>
      <a
        className="btn btn-block"
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a meeting →
      </a>
      <Footer email={EMAIL} />
    </main>
  )
}
