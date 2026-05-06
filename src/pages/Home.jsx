import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { EMAIL } from '../config.js'

const ScalingIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="14 7 21 7 21 14" />
  </svg>
)

const EmbedIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const DevopsIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
  </svg>
)

const packages = [
  {
    slug: 'fullstack-embed',
    name: 'Fullstack Embed',
    Icon: EmbedIcon,
    blurb:
      'Hire me by the hour to slot into your team and ship fullstack work fast — features, fixes, refactors.',
    pills: ['$185 / hour', '8 hr / week min'],
    accent: 'blue',
  },
  {
    slug: 'devops-overhaul',
    name: 'DevOps Overhaul',
    Icon: DevopsIcon,
    blurb:
      'Define deployment strategies, get off legacy infrastructure, and speed up deployments.',
    pills: ['$32,000 flat', '4–6 weeks'],
    accent: 'green',
  },
  {
    slug: 'scaling-readiness',
    name: 'Scaling Readiness Assessment',
    Icon: ScalingIcon,
    blurb:
      "Know exactly what will break first, when it will break, and what you're overpaying for today.",
    pills: ['$8,500 flat', '5 business days'],
    accent: 'pink',
  },
]

export default function Home() {
  return (
    <main className="page">
      <Header />
      <p className="eyebrow eyebrow--icon">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
        Packages
      </p>

      <ul className="packages">
        {packages.map((pkg) => (
          <li key={pkg.slug}>
            <Link
              to={`/${pkg.slug}`}
              className={`package-card${pkg.accent ? ` package-card--${pkg.accent}` : ''}`}
            >
              <h2 className="package-title">
                {pkg.Icon && <pkg.Icon />}
                {pkg.name}
              </h2>
              <p className="muted">{pkg.blurb}</p>
              <div className="pills">
                {pkg.pills.map((p) => (
                  <span key={p} className="pill">{p}</span>
                ))}
              </div>
              <span className="package-cta">Learn more →</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="why-link">
        <Link to="/why">Why choose me? →</Link>
      </p>

      <Footer email={EMAIL} />
    </main>
  )
}
