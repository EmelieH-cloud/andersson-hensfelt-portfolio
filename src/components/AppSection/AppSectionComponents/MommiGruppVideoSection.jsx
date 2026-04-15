import './mommigruppvideosection.css'
import { useEffect, useRef, useState } from 'react'
import MOMMIGROUP from '../../../assets/mommi/mommigrupper.mp4'
import AppText from '../../Font/AppText'

const MommiGruppVideoSection = () => {
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

        {/* 🔥 VIDEO FÖRST (EXAKT SAMMA SOM HERO) */}
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
          <h2 className="mommigrupp-title">
            Skapa och gå med i mommiGrupper
          </h2>

          <AppText className="mommigrupp-text">
           Skapa eller gå med i mommiGrupper som passar just dig – från graviditet och småbarnsliv till träning, karriär och intressen.
           Här kan ni skriva om allt från amning och sömn till tips på barnvagnar, förlossningsberättelser eller bara dela vardagsreflektioner.
           Grupper kan även vara knutna till en geografisk plats, till exempel  “Gravida i Lund”. 
          </AppText>

          <AppText className="mommigrupp-text">
           Här blir du en del av en varm gemenskap med andra mommis!
          </AppText>
        </div>

      </div>

    </section>
  )
}

export default MommiGruppVideoSection