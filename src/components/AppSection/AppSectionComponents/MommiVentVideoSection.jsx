import './mommiventvideosection.css'
import { useEffect, useRef, useState } from 'react'
import MOMMIVENT from '../../../assets/mommi/mommivent-video.mp4'

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
    <section className="mommivent-video-hero">
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
    </section>
  )
}

export default MommiventVideoSection