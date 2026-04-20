const items = [
  {
    title: 'The breakpoint map',
    body: "A ranked list of every component in your stack, showing the load level at which each one becomes the bottleneck. Database connections, API gateway throughput, worker queues, cache capacity, whatever applies to your architecture. You'll know whether your next bottleneck hits at 2x current traffic or 20x.",
  },
  {
    title: 'The overspend report',
    body: "For each component: current capacity vs. actual utilization vs. what you're paying. Where you're buying headroom you'll never use, and where you're running closer to the edge than you think.",
  },
  {
    title: 'The scaling playbook',
    body: 'A prioritized action list: what to fix before 2x, 5x, 10x current load. Each item includes estimated effort and rough cost/savings impact.',
  },
  {
    title: 'Walkthrough call',
    body: '45 minutes to go through findings, answer questions, and discuss implementation priorities.',
  },
]

export default function Details() {
  return (
    <section>
      <p>
        Most teams find out their system's breaking point the hard way — in
        production, during a traffic spike, usually at the worst possible
        time. This assessment eliminates the guessing. You get a clear map
        of your infrastructure's actual limits and a prioritized plan for
        what to fix first.
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
        Read-only access to production cloud accounts, monitoring and APM
        tools, and a 60-minute kickoff call with your technical team.
      </p>

      <h2>Who this is for</h2>
      <p className="muted">
        Teams running production systems at meaningful scale — generally
        $3k+/month in infrastructure spend — who expect growth and want to
        get ahead of it.
      </p>
    </section>
  )
}
