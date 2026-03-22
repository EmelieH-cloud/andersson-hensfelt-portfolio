import './herostyle.css'
import { useState, useRef, useEffect } from 'react'

import HERO_VIDEO from '../../assets/mommi/mommivideo.mp4'
import MOMMI_LOGO from '../../assets/mommi/mommi-logo.png'

import AppText from '../Font/AppText'

const Hero = () => {
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    // Försök spela först när videon KAN spelas smooth
    const handleCanPlay = () => {
      video.play().catch(() => {})
      setVideoReady(true)
    }

    video.addEventListener('canplaythrough', handleCanPlay)

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay)
    }
  }, [])

  return (
    <section className="hero-container">

      {/* VIDEO */}
      <video
        ref={videoRef}
        className={`hero-video ${videoReady ? 'loaded' : ''}`}
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">

        <img
          src={MOMMI_LOGO}
          alt="Mommi logo"
          className="hero-logo"
        />

        <AppText weight={400} className="hero-intro">
          Oavsett om du är gravid, nybliven mamma eller har barn som
          blivit lite större – mommi är för mammor som vill träffa mammor, med eller utan barn.
        </AppText>

      </div>

    </section>
  )
}

export default Hero