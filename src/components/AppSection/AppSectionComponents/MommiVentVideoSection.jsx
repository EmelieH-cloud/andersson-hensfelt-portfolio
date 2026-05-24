import './mommiventvideosection.css'

import { useEffect, useRef, useState } from 'react'

import { useTranslation } from 'react-i18next'

import MOMMIVENT from '../../../assets/mommi/mommivent-video.mp4'

import AppText from '../../Font/AppText'

const MommiventVideoSection = () => {

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

    <section className="mommivent-section">

      <div className="mommivent-container">

        {/* VIDEO */}

        <div className="mommivent-video-wrapper">

          <video
            ref={videoRef}
            className={`mommivent-video ${videoReady ? 'visible' : ''}`}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
          >

            <source src={MOMMIVENT} type="video/mp4" />

          </video>

        </div>

        {/* TEXT */}

        <div className="mommivent-content">

          <AppText className="mommivent-title">
            {t("mommiMeetTitle")}
          </AppText>

          <AppText className="mommivent-text">
            {t("mommiMeetText1")}
          </AppText>

          <AppText className="mommivent-text">
            {t("mommiMeetText2")}
          </AppText>

        </div>

      </div>

    </section>
  )
}

export default MommiventVideoSection