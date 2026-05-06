import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import { BOOKING_URL, EMAIL } from '../config.js'

const items = [
  {
    title: 'Ship features alongside your team',
    body: "I plug into your stack, your standups, and your review process. Same Linear board, same Slack channels, same Git workflow. No long ramp — I'm productive in the first week.",
  },
  {
    title: 'Full stack, end to end',
    body: 'Front end (React/Next.js, TypeScript), back end (Node, Python, Go), database (Postgres, Mongo), infra glue. I close tickets across the whole stack so you don’t have to chop work into front-end-only or back-end-only swimlanes.',
  },
  {
    title: 'Senior judgment, not just keystrokes',
    body: "I'll flag scaling cliffs, sketchy abstractions, and auth/security holes as I see them. You get a working PR plus a heads-up on what your team might want to look at next.",
  },
]

export default function FullstackEmbed() {
  return (
    <main className="page">
      <Header />
      <p className="eyebrow">
        <Link to="/">← all packages</Link>
      </p>
      <div className="section--blue">
        <section>
          <p className="eyebrow">service · hourly engagement</p>
          <h1 className="h1--icon">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Fullstack Embed
          </h1>
          <p className="sub">
            Hire me by the hour to slot into your team and ship fullstack
            work fast — features, fixes, refactors, the unglamorous stuff
            on the backlog.
          </p>
          <div className="pills">
            <span className="pill">$185 / hour</span>
            <span className="pill">8 hr / week minimum</span>
            <span className="pill">2 week minimum engagement</span>
          </div>
          <a
            className="btn btn-block"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a meeting →
          </a>
        </section>
        <hr />
        <section>
          <p>
            Sometimes you don’t need a six-week consulting engagement.
            You need someone senior who can pick up a ticket on Monday
            and have a PR up by Wednesday — without a two-week onboarding
            tax. That’s this.
          </p>

          <h2>What you get</h2>
          <ul className="list">
            {items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>

          <h2>What I need from you</h2>
          <p className="muted">
            Repo access, a Slack invite, and a clear definition of
            tickets. I work async by default and join whichever standups
            and reviews are useful.
          </p>

          <h2>Who this is for</h2>
          <p className="muted">
            Teams with more roadmap than headcount: a backlog that’s
            slipping, a launch you need to hit, or a senior hire that
            won’t start for two months. Not a fit if you need a
            full-time lead or a long-term IC seat.
          </p>
        </section>
      </div>
      <p className="why-link">
        <Link to="/why">Why choose me? →</Link>
      </p>
      <FinalCTA bookingUrl={BOOKING_URL} />
      <Footer email={EMAIL} />
    </main>
  )
}
