import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import { BOOKING_URL, EMAIL } from '../config.js'

const items = [
  {
    title: 'Deployment strategy',
    body: "We pick the right target for where your team actually is — Kubernetes (EKS/GKE) if you’ve outgrown single-VM ops, ECS Fargate or Cloud Run if you want managed orchestration without the K8s overhead, Fly/Render if you want to skip cloud-vendor sprawl entirely. The decision is documented with the tradeoffs, not handed down.",
  },
  {
    title: 'Migration off legacy infra',
    body: 'Containerize your services, set up the new cluster (typically EKS with managed node groups), and cut traffic over without downtime. Hand-rolled EC2 boxes, Elastic Beanstalk, bare droplets, on-prem VMs — I’ve moved all of them. Old infra is decommissioned only after the new path is proven in prod.',
  },
  {
    title: 'Infrastructure as code',
    body: 'All cloud resources defined in Terraform, all cluster workloads in Helm or Kustomize, all secrets in a real secret manager. No more "the staging box was configured by someone who left in 2022."',
  },
  {
    title: 'CI/CD that you trust',
    body: 'GitHub Actions (or GitLab CI / CircleCI — whatever you’re on) building containers, running tests, and deploying via GitOps (ArgoCD or Flux). Merge to main → it’s in staging in minutes. Promote with a tag, roll back with a click.',
  },
  {
    title: 'Observability baseline',
    body: 'Metrics (Prometheus or Datadog), logs (Loki / CloudWatch / Datadog), traces (OpenTelemetry), and a small set of meaningful alerts wired to your on-call. Dashboards your team will actually look at, not 200 auto-generated panels nobody reads.',
  },
  {
    title: 'Runbook + handoff',
    body: 'Written runbooks for deploys, rollbacks, scaling events, and the top five incidents that are most likely to wake someone up. Two weeks of pairing with your team after cutover so the knowledge stays in-house.',
  },
]

export default function DevopsOverhaul() {
  return (
    <main className="page">
      <Header />
      <p className="eyebrow">
        <Link to="/">← all packages</Link>
      </p>
      <div className="section--green">
        <section>
          <p className="eyebrow">service · infrastructure overhaul</p>
          <h1 className="h1--icon">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
            </svg>
            DevOps Overhaul
          </h1>
          <p className="sub">
            Define deployment strategies, get off legacy infrastructure,
            and speed up deployments.
          </p>
          <div className="pills">
            <span className="pill">$32,000 flat</span>
            <span className="pill">4–6 weeks</span>
            <span className="pill">zero-downtime cutover</span>
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
            Most teams end up with infra that grew one ticket at a time:
            a couple of EC2 instances, a Beanstalk env, some hand-pasted
            shell scripts, and tribal knowledge. It works until it
            doesn’t — usually the day someone leaves or traffic doubles.
            This package replaces it with a modern, documented platform.
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
            Admin access to your cloud accounts, CI provider, and DNS. A
            point person on your team for ~3 hours/week of pairing, and
            a maintenance window for the final cutover.
          </p>

          <h2>Who this is for</h2>
          <p className="muted">
            Teams whose deploys are scary, whose infra was set up years
            ago by someone who’s no longer around, or who are about to
            outgrow whatever they’re on. Not a fit for greenfield
            projects — for those, we’d skip the migration and just build
            on the right platform from day one.
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
