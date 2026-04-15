import './mommiherovideosection.css'
import { useEffect, useRef, useState } from 'react'
import GET_STARTED_GUIDE from '../../../assets/mommi/videoguide.mp4'
import AppText from '../../Font/AppText'

const MommiHeroVideoSection = () => {
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

        {/* VIDEO (vänster) */}
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

        {/* TEXT (höger) */}
        <div className="mommihero-content">
          <h2 className="mommihero-title">
            Kom igång med mommiSök
          </h2>

          <AppText className="mommihero-text">
            Kom igång med mommi på bara några minuter - skapa din profil och börja utforska allt som appen har att erbjuda!
          </AppText>

          <AppText className="mommihero-text">
            Använd mommiSök för att hitta mommis nära dig. När du hittar en mommi som du vill lära känna kan du skicka en mommiförfrågan med ett meddelande om vad som fångade ditt intresse. När hon svarar blir ni mommivänner och en chatt öppnas där ni kan planera en träff!
          </AppText>
        </div>

      </div>

    </section>
  )
}

export default MommiHeroVideoSection