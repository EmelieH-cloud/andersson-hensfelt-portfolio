import './mommigruppvideosection.css'
import { useEffect, useRef, useState } from 'react'
import MOMMIGROUP from '../../../assets/mommi/mommigrupper.mp4'

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
    <section className="mommigrupp-video-hero">
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
    </section>
  )
}

export default MommiGruppVideoSection