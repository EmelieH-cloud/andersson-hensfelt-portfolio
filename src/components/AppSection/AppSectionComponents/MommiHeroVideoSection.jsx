import './mommiherovideosection.css'
import { useEffect, useRef, useState } from 'react'
import GET_STARTED_GUIDE from '../../../assets/mommi/videoguide.mp4'

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
    <section className="mommi-video-hero">

      <div className="mommi-video-wrapper">
        <video
          ref={videoRef}
          className={`mommi-video ${videoReady ? 'visible' : ''}`}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        >
          <source src={GET_STARTED_GUIDE} type="video/mp4" />
        </video>
      </div>

    </section>
  )
}

export default MommiHeroVideoSection