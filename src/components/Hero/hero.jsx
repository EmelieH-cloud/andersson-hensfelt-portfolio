import './herostyle.css'
import { useEffect, useRef, useState } from 'react'

import HERO_VIDEO from '../../assets/mommi/mommivideo.mp4'
import MOMMI_LOGO from '../../assets/mommi/mommi-logo.png'

import AppText from '../Font/AppText'

const Hero = () => {
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // 🔥 loadeddata = snabbaste “safe play”
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

      {/* VIDEO */}
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

      {/* 🔥 VIT OVERLAY */}
      <div className="hero-overlay" />

      {/* CONTENT */}
      <div className="hero-content">

        <img
          src={MOMMI_LOGO}
          alt="Mommi logo"
          className="hero-logo"
        />

        <AppText weight={400} className="hero-intro">
          Oavsett om du är gravid, nybliven mamma eller har barn som
          blivit lite större – mommi är för mammor som vill träffa mammor,
          med eller utan barn.
        </AppText>

      </div>

    </section>
  )
}

export default Hero