import './herostyle.css'
import { useEffect, useRef, useState } from 'react'
import { useTranslation }
from "react-i18next";
import HERO_VIDEO from '../../../assets/mommi/mommivideo.mp4'
import MOMMI_LOGO from '../../../assets/mommi/mommi-logo.png'

import AppText from '../../shared/typography/Font/AppText'
import CircleDecor from '../../shared/decorations/CircleDecor/CircleDecor'

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

      <div className="hero-overlay" aria-hidden="true" />

      <CircleDecor
        size="clamp(380px, 38vw, 540px)"
        top="9%"
        left="-14%"
        mobileSize="clamp(320px, 82vw, 440px)"
        mobileTop="-18%"
        mobileLeft="-34%"
        tone="light"
        transparency="high"
        zIndex={1}
        className="hero-circle-primary"
      />
      <CircleDecor
        size="clamp(360px, 36vw, 520px)"
        top="4%"
        right="-12%"
        mobileSize="clamp(280px, 72vw, 390px)"
        mobileTop="-18%"
        mobileRight="-30%"
        tone="light"
        transparency="high"
        zIndex={1}
        className="hero-circle-secondary"
      />
      <CircleDecor
        size="clamp(360px, 36vw, 520px)"
        top="auto"
        bottom="-120px"
        right="-2%"
        mobileSize="clamp(220px, 58vw, 320px)"
        mobileTop="auto"
        mobileRight="-18%"
        tone="light"
        transparency="high"
        zIndex={1}
        className="hero-circle-accent hero-circle-bottom-right"
      />
      <CircleDecor
        size="clamp(360px, 36vw, 520px)"
        top="auto"
        bottom="-170px"
        left="4%"
        mobileSize="clamp(220px, 58vw, 320px)"
        mobileTop="19%"
        mobileLeft="-28%"
        tone="light"
        transparency="high"
        zIndex={1}
        className="hero-circle-accent"
      />
      <div className="hero-content">
        <div className="hero-logo-wrapper">
          <img src={MOMMI_LOGO} alt="Mommi logo" className="hero-logo" />
        </div>

        <AppText weight={400} className="hero-intro">
          {hero.intro}{" "}
          <span className="hero-highlight">{hero.highlight}</span>,{" "}
          {hero.ending}
        </AppText>
      </div>

    </section>
  )
}

export default Hero
