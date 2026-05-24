import './mommiherovideosection.css'

import { useEffect, useRef, useState } from 'react'

import { useTranslation } from 'react-i18next'

import GET_STARTED_GUIDE from '../../../assets/mommi/videoguide.mp4'

import AppText from '../../Font/AppText'

const MommiHeroVideoSection = () => {

  const { t } = useTranslation("general")

  const videoRef = useRef(null)

  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {

    const video = videoRef.current

    if (!video) return

    const handleLoaded = () => {

      video.play().catch(() => {})

      setVideoReady(true)
    }

    video.addEventListener('loadeddata', handleLoaded)

    return () => {
      video.removeEventListener('loadeddata', handleLoaded)
    }

  }, [])

  return (

    <section className="mommihero-section">

      <div className="mommihero-container">

        {/* VIDEO */}

        <div className="mommihero-video-wrapper">

          <video
            ref={videoRef}
            className={`mommihero-video ${videoReady ? 'visible' : ''}`}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
          >

            <source src={GET_STARTED_GUIDE} type="video/mp4" />

          </video>

        </div>

        {/* TEXT */}

        <div className="mommihero-content">

          <AppText className="mommihero-title">
            {t("mommiSearchTitle")}
          </AppText>

          <AppText className="mommihero-text">
            {t("mommiSearchText1")}
          </AppText>

          <AppText className="mommihero-text">
            {t("mommiSearchText2")}
          </AppText>

        </div>

      </div>

    </section>
  )
}

export default MommiHeroVideoSection