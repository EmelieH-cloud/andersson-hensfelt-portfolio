import './appsection.css'
import 'animate.css'

import GOOGLE from '../../assets/appStore/googlebtn.png'
import MOMMISOK from '../../assets/mommi/mommisok/mommisok.png'
import MOMMIPHONE from '../../assets/mommi/mommiphone.png'
import IOS from '../../assets/appStore/appstore.svg'

import AppText from '../Font/AppText'
import CircleDecor from '../CircleDecor/CircleDecor'

const AppSection = () => {

  return (

    <section className="app-section">

      {/* DECOR CIRCLES */}

        <CircleDecor
    size={520}
    top="-180px"
    left="-200px"
    tone="light"
    opacity={0.35}
    animation="drift"
    speed={22}
  />

     

  <CircleDecor
    size={520}
    bottom="-150px"
    right="-200px"
    tone="medium"
    opacity={0.25}
    animation="drift"
    speed={22}
  />

  <CircleDecor
    size={460}
    top="220px"
    left="2%"
    tone="medium"
    opacity={0.18}
    animation="drift"
    speed={22}
  />


      <div className="app-section-container animate__animated animate__fadeIn">

        {/* PHONE ROW */}

  <AppText weight={600} className="app-section-release">
    Kommande release
  </AppText>

        <div className="app-section-phones">

          <img
            src={MOMMIPHONE}
            alt="Mommi app"
            className="phone-image"
          />

          <img
            src={MOMMISOK}
            alt="Mommi app"
            className="phone-image"
          />

        </div>


        {/* TEXT CARD */}

        <div className="app-section-text-area">

          <AppText weight={600} className="app-section-subtitle">
            JOINA VÅRT COMMUNITY
          </AppText>

          <AppText as="h1" weight={300} className="app-section-title">
            BLI EN MOMMI
          </AppText>

          <div className="download-buttons">

            <a
              href="https://play.google.com/store/apps/details?id=com.anderssonhensfelt.onemoredate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GOOGLE} alt="Google Play" className="store-btn" />
            </a>

            <a
              href="https://apps.apple.com/us/app/one-more-date/id6651834743"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IOS} alt="App Store" className="store-btn" />
            </a>

          </div>

        </div>

      </div>

    </section>

  )
}

export default AppSection