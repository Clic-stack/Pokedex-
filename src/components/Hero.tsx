import { useName } from '../context/nameContext'
import '../styles/Hero.css'

interface HeroProps {
  scrollToNavBar: () => void
}

function Hero({ scrollToNavBar }: HeroProps) {
  const { name, cleanName } = useName()

  return (
    <section id="Hero" className="hero">
      {name && (
        <div className="hero__content">
          <h1 className="hero__welcome">Welcome trainer {name} to</h1>
          <h2 className="hero__ask">Ready to catch'em all?</h2>
          <button className="btn__pokedex" onClick={scrollToNavBar}>Go!</button>
          <button className="btn__exit" onClick={cleanName}>Exit</button>
        </div>
      )}
    </section>
  )
}

export default Hero
