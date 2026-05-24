import './mommigruppvideosection.css'

import { useEffect, useRef, useState } from 'react'

import { useTranslation } from 'react-i18next'

import MOMMIGROUP from '../../../assets/mommi/mommigrupper.mp4'

import AppText from '../../Font/AppText'

const MommiGruppVideoSection = () => {

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

    <section className="mommigrupp-section">

      <div className="mommigrupp-container">

        {/* VIDEO */}

        <div className="mommigrupp-video-wrapper">

          <video
            ref={videoRef}
            className={`mommigrupp-video ${videoReady ? 'visible' : ''}`}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
          >

            <source src={MOMMIGROUP} type="video/mp4" />

          </video>

        </div>

        {/* TEXT */}

        <div className="mommigrupp-content">

          <AppText className="mommigrupp-title">
            {t("mommiGroupTitle")}
          </AppText>

          <AppText className="mommigrupp-text">
            {t("mommiGroupText1")}
          </AppText>

          <AppText className="mommigrupp-text">
            {t("mommiGroupText2")}
          </AppText>

        </div>

      </div>

    </section>
  )
}

export default MommiGruppVideoSection