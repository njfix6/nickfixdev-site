import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Details from '../components/Details.jsx'
import ScalingGraph from '../components/ScalingGraph.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Footer from '../components/Footer.jsx'
import { BOOKING_URL, EMAIL } from '../config.js'

export default function ScalingReadiness() {
  return (
    <main className="page">
      <Header />
      <p className="eyebrow">
        <Link to="/">← all packages</Link>
      </p>
      <div className="section--pink">
        <Hero bookingUrl={BOOKING_URL}>
          <ScalingGraph />
        </Hero>
        <hr />
        <Details />
      </div>
      <p className="why-link">
        <Link to="/why">Why choose me? →</Link>
      </p>
      <FinalCTA bookingUrl={BOOKING_URL} />
      <Footer email={EMAIL} />
    </main>
  )
}
