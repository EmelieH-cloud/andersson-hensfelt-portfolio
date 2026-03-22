import './joinmommi.css'
import { useEffect, useState } from 'react'

import CUSTOMBG from '../../../assets/mommi/custombg.png'

import JoinMommiContent from './JoinMommiContent'

const JoinMommiSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)

    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  // 📱 MOBILE: cirkelbild + content
  if (isMobile) {
    return (
      <section className="join-mommi-mobile">

        <div
          className="join-mobile-image"
          style={{ backgroundImage: `url(${CUSTOMBG})` }}
        />

        <JoinMommiContent />

      </section>
    )
  }

  // 💻 DESKTOP: overlay version
  return (
    <section
      className="join-mommi-section"
      style={{ backgroundImage: `url(${CUSTOMBG})` }}
    >

      <div className="join-overlay" />

      <div className="join-inner">
        <JoinMommiContent />
      </div>

    </section>
  )
}

export default JoinMommiSection