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


      <div className="mommi-hero-inner">

        <div className="mommi-hero-text">

          <AppText as="h1" weight={300} className="mommi-hero-title">
            För mammor som vill träffa mammor
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