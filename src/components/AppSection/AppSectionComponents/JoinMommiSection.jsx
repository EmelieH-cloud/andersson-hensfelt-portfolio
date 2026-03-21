import './joinmommi.css'

import GOOGLE from '../../../assets/appStore/googlebtn.png'
import IOS from '../../../assets/appStore/appstore.svg'
import JOIN from '../../../assets/mommi/join.jpg'
import AppText from '../../Font/AppText'

const JoinMommiSection = () => {
  return (
    <section className="join-mommi-section">

      {/* BACKGROUND */}
      <div 
        className="join-bg"
        style={{ backgroundImage: `url(${JOIN})` }}
      />

      {/* SOFT OVERLAY */}
      <div className="join-overlay" />

      {/* CONTENT */}
      <div className="join-content">

        <AppText weight={600} className="join-subtitle">
          JOINA VÅRT COMMUNITY
        </AppText>

        <AppText as="h1" weight={300} className="join-title">
          BLI EN MOMMI
        </AppText>

        <p className="join-description">
          Ladda ned appen idag, hitta ditt community och skapa minnen tillsammans 
          med andra mammor nära dig.
        </p>

        <div className="join-buttons">

          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src={GOOGLE} alt="Google Play" className="join-store-btn" />
          </a>

          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src={IOS} alt="App Store" className="join-store-btn" />
          </a>

        </div>

      </div>

    </section>
  )
}

export default JoinMommiSection