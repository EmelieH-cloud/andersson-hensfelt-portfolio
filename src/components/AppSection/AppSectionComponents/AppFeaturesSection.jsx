import './appfeaturessection.css'
import { useEffect, useRef } from 'react'

import MOMMIGROUP from '../../../assets/mommi/phonepictures/mommigruppbilden.png'
import MOMMIGROUPHEADER from '../../../assets/mommi/mommigroup-header.png'
import MOMMIVENT from '../../../assets/mommi/phonepictures/mommitraffbilden.png'
import MOMMIVENTHEADER from '../../../assets/mommi/mommivent-header.png'
import MOMMISOK from '../../../assets/mommi/phonepictures/mommisokbilden.png'
import MOMMISOKHEADER from '../../../assets/mommi/mommisok-header.png'
import JOIN from '../../../assets/mommi/join.jpg'

const AppFeaturesSection = () => {
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      {
        threshold: 0.2
      }
    )

    itemsRef.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="app-features">

      <div
        className="app-features-bg"
        style={{ backgroundImage: `url(${JOIN})` }}
      />

      <div className="app-features-overlay" />

      <div className="app-features-container">

        <div className="app-features-phones">

          {/* CARD 1 */}
          <div
            className="feature-item reveal"
            ref={el => itemsRef.current[0] = el}
          >
            <img src={MOMMISOKHEADER} className="feature-header-img" />
            <img src={MOMMISOK} className="phone-image" />
          </div>

          {/* CARD 2 */}
          <div
            className="feature-item reveal delay-1"
            ref={el => itemsRef.current[1] = el}
          >
            <img src={MOMMIVENTHEADER} className="feature-header-img" />
            <img src={MOMMIVENT} className="phone-image" />
          </div>

          {/* CARD 3 */}
          <div
            className="feature-item reveal delay-2"
            ref={el => itemsRef.current[2] = el}
          >
            <img src={MOMMIGROUPHEADER} className="feature-header-img" />
            <img src={MOMMIGROUP} className="phone-image" />
          </div>

        </div>

      </div>

    </section>
  )
}

export default AppFeaturesSection