import './appfeaturessection.css'
import { useEffect, useRef } from 'react'

import MOMMIGROUP from '../../../assets/mommi/group.png'
import MOMMIVENT from '../../../assets/mommi/traff.png'
import MOMMISOK from '../../../assets/mommi/sok.png'
import JOIN from '../../../assets/mommi/join.jpg'

import AppText from '../../Font/AppText'

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
      { threshold: 0.2 }
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

        {/* 🔥 HEADER TEXT */}
        <div
          className="app-features-text reveal"
          ref={el => itemsRef.current[3] = el}
        >

  <div className="app-features-heading-box">
    <h2 className="app-features-heading">
      Tre sätt att träffa andra mommis
    </h2>
  </div>
          <AppText>
            När vi skapade mommi hade vi med oss att alla är olika och vill träffas på olika sätt. 
            Vissa föredrar att träffa en person i taget, medan andra hellre ses i grupp. 
            Därför har vi skapat tre olika sätt för dig att komma i kontakt med och träffa andra mommis - mommiSök, mommiTräff och mommiGrupper.
          </AppText>
        </div>

        {/* 🔥 FEATURES */}
        <div className="app-features-phones">

          {/* CARD 1 */}
          <div
            className="feature-item reveal"
            ref={el => itemsRef.current[0] = el}
          >
            <img src={MOMMISOK} className="phone-image" />

            <h3 className="feature-title">Träffas en och en</h3>
            <AppText className="feature-desc">
              Hitta mommis utifrån de filter du själv väljer. Perfekt om du vill träffas en och en för playdates, barnvagnspromenader eller varför inte en barnfri kväll?
            </AppText>
          </div>

          {/* CARD 2 */}
          <div
            className="feature-item reveal delay-1"
            ref={el => itemsRef.current[1] = el}
          >
            <img src={MOMMIVENT} className="phone-image" />

            <h3 className="feature-title">Träffas flera</h3>
            <AppText className="feature-desc">
              Delta i eller skapa aktiviteter tillsammans med andra mommis. Det kan vara allt från babydans, gravidyoga, picknick i parken till en afterwork.
            </AppText>
          </div>

          {/* CARD 3 */}
          <div
            className="feature-item reveal delay-2"
            ref={el => itemsRef.current[2] = el}
          >
            <img src={MOMMIGROUP} className="phone-image" />

            <h3 className="feature-title">Gå med i grupper</h3>
            <AppText className="feature-desc">
             Gå med i eller skapa egna communitys där du kan diskutera, ställa frågor eller hitta mommis som delar något specifikt med dig.
            </AppText>
          </div>

        </div>

      </div>

    </section>
  )
}

export default AppFeaturesSection