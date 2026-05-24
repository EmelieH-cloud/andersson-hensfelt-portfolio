import './joinmommi.css'

import { useTranslation } from 'react-i18next'

import GOOGLE from '../../../assets/appStore/googlebtn.png'
import IOS from '../../../assets/appStore/appstore.svg'

import AppText from '../../Font/AppText'

const JoinMommiContent = () => {

  const { t } = useTranslation("general")

  return (

    <div className="join-content">

      <AppText
        weight={600}
        className="join-subtitle"
      >
        {t("joinMommi.subtitle")}
      </AppText>

      <AppText
        as="h1"
        weight={400}
        className="join-title"
      >
        {t("joinMommi.title")}
      </AppText>

      <AppText className="join-description">
        {t("joinMommi.description")}
      </AppText>

      <div className="join-buttons">

        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >

          <img
            src={GOOGLE}
            alt="Google Play"
            className="join-store-btn"
          />

        </a>

        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >

          <img
            src={IOS}
            alt="App Store"
            className="join-store-btn"
          />

        </a>

      </div>

    </div>
  )
}

export default JoinMommiContent