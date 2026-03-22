import './joinmommi.css'

import GOOGLE from '../../../assets/appStore/googlebtn.png'
import IOS from '../../../assets/appStore/appstore.svg'
import CUSTOMBG from '../../../assets/mommi/custombg.png'

import AppText from '../../Font/AppText'

const JoinMommiSection = () => {
  return (
    <section
      className="join-mommi-section"
      style={{ backgroundImage: `url(${CUSTOMBG})` }}
    >

      {/* 🔥 DARK OVERLAY */}
      <div className="join-overlay" />

      <div className="join-content">

        <AppText weight={600} className="join-subtitle">
          JOINA VÅRT COMMUNITY
        </AppText>

        <AppText as="h1" weight={400} className="join-title">
          Bli en mommi du också
        </AppText>

        <AppText className="join-description">
          Ladda ned appen idag och skapa minnen tillsammans 
          med andra mommis nära dig.
        </AppText>

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