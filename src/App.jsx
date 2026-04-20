import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Details from './components/Details.jsx'
import Credibility from './components/Credibility.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export const BOOKING_URL = 'https://cal.com/nickfix/intro'
export const EMAIL = 'hello@nickfix.dev'

export default function App() {
  return (
    <main className="page">
      <Header />
      <Hero bookingUrl={BOOKING_URL} />
      <hr />
      <Details />
      <Credibility />
      <FinalCTA bookingUrl={BOOKING_URL} />
      <Footer email={EMAIL} />
    </main>
  )
}
