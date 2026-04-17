import './mommiventvideosection.css'
import { useEffect, useRef, useState } from 'react'
import MOMMIVENT from '../../../assets/mommi/mommivent-video.mp4'
import AppText from '../../Font/AppText'

const MommiventVideoSection = () => {
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

        {/* 🔥 VIDEO FÖRST (EXAKT SOM HERO) */}
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
            Upptäck mommiTräffar
          </AppText>

          <AppText className="mommivent-text">
            Vill du hitta på något tillsammans med andra mommis? Oavsett om du vill planera en afterwork utan barn, hitta sällskap till gravidyogan eller någon att ta en löprunda med – kan du enkelt skapa en mommiTräff.
          </AppText>

          <AppText className="mommivent-text">
            Träffen kan vara öppen för alla eller bara för dina mommivänner. Du kan även skapa återkommande träffar - perfekt om du gör något regelbundet som du vill ha sällskap till.
          </AppText>
        </div>

      </div>

    </section>
  )
}

export default MommiventVideoSection