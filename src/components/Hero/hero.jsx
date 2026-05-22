import './herostyle.css'
import { useEffect, useRef, useState } from 'react'
import { useTranslation }
from "react-i18next";
import HERO_VIDEO from '../../assets/mommi/mommivideo.mp4'
import MOMMI_LOGO from '../../assets/mommi/mommi-logo.png'

import AppText from '../Font/AppText'

const Hero = () => {
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)
const { t } =
  useTranslation("general");

  const hero =
  t("hero", {
    returnObjects: true,
  });

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
    <section className="hero-container">

      <video
        ref={videoRef}
        className={`hero-video ${videoReady ? 'visible' : ''}`}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">

        {/* 🔥 NY LOGO WRAPPER */}
        <div className="hero-logo-wrapper">
          <img
            src={MOMMI_LOGO}
            alt="Mommi logo"
            className="hero-logo"
          />
        </div>

        <AppText weight={500} className="hero-intro">
  {hero.intro}{" "}
  <span className="hero-highlight">
    {hero.highlight}
  </span>,{" "}
  {hero.ending}
</AppText>

      </div>

    </section>
  )
}

export default Hero