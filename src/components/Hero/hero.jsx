import './herostyle.css'
import { useState } from 'react'

import HERO_VIDEO from '../../assets/mommi/mommivideo.mp4'
import MOMMI_LOGO from '../../assets/mommi/mommi-logo.png'
import HERO_FALLBACK from '../../assets/mommi/mommibg.jpg' // 🔥 viktig

import AppText from '../Font/AppText'

const Hero = () => {

  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section className="hero-container">

      {/* 🔥 PREMIUM fallback image */}
      <div
        className="hero-fallback"
        style={{ backgroundImage: `url(${HERO_FALLBACK})` }}
      />

      {/* VIDEO */}
      <video
        className={`hero-video ${videoLoaded ? 'loaded' : ''}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

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