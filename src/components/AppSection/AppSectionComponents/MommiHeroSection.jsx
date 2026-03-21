import './mommihero.css'

import MOMMIBG from '../../../assets/mommi/mommibg.jpg'
import MOMMI from '../../../assets/mommi/phonepictures/mommiherophone.png'
import AppText from '../../Font/AppText'

const MommiHeroSection = () => {
  return (
    <section className="mommi-hero">

      <div 
        className="mommi-hero-bg"
        style={{ backgroundImage: `url(${MOMMIBG})` }}
      />

      <div className="mommi-hero-overlay" />

      <div className="mommi-hero-inner">

        <div className="mommi-hero-text">

          <AppText as="h1" weight={300} className="mommi-hero-title">
            För mammor som vill träffa mammor
          </AppText>

          <AppText as="h2" weight={300} className="mommi-hero-accent">
            På ditt sätt
          </AppText>

          <AppText className="mommi-hero-description">
            När vi skapade mommi hade vi med oss att alla är olika och vill träffas på olika sätt. 
            Vissa föredrar att träffa en person i taget, medan andra hellre ses i grupp. 
            Därför har vi skapat tre olika sätt för dig att komma i kontakt med och träffa andra mommis - mommiSök, mommiTräff och mommiGrupper. 
          </AppText>

        </div>

        <div className="mommi-hero-phone">
          <img src={MOMMI} alt="Mommi app" className="mommi-phone" />
        </div>

      </div>

    </section>
  )
}

export default MommiHeroSection