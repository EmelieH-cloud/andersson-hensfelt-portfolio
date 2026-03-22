import './ourappsstyle.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../assets/oneMoreDate/cardview.png'
import Icon2 from '../../assets/oneMoreDate/deckview.png'
import Icon3 from '../../assets/oneMoreDate/playersview.png'

import AppText from '../Font/AppText'

/* Smooth image */
const SmoothImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <img
      src={src}
      alt={alt}
      className={`our-img ${loaded ? 'loaded' : ''}`}
      onLoad={() => setLoaded(true)}
    />
  )
}

SmoothImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

const Ourapps = () => {
  return (
    <section className="our-apps-section">

      <div className="our-apps-container">

        <AppText as="h1" weight={600} className="our-apps-title">
          One More Date?
        </AppText>

        <AppText className="our-apps-sub">
          One more date is a mobile game available for both android and IOS.
        </AppText>

        <div className="our-apps-links">
          <Link to="/policy">Privacy Policy</Link>
          <Link to="/support">Support</Link>
        </div>

        {/* IMAGES */}
        <div className="our-apps-images">
          <SmoothImage src={Icon} alt="card view" />
          <SmoothImage src={Icon2} alt="deck view" />
          <SmoothImage src={Icon3} alt="players view" />
        </div>

        {/* TEXT */}
        <div className="our-apps-content">

          <AppText className="our-apps-text">
            Imagine you are on a date with someone who seems absolutely perfect – attractive, charming and even makes you laugh. But then, suddenly something happens. It turns out that your date doesn’t believe in the moon landing. Is this a dealbreaker for you, or would you consider going on One More Date?
          </AppText>

          <AppText className="our-apps-text">
            One More Date is the perfect game to spark lively discussions and break the ice at every party!
          </AppText>

          {/* 🔥 NEW PREMIUM CARDS */}
          <div className="our-apps-cards">

            <div className="omd-card">
              <span className="omd-card-intro">How about…</span>
              <p>Your date only brushes their teeth once a day</p>
            </div>

            <div className="omd-card">
              <span className="omd-card-intro">How about…</span>
              <p>Your date was born as a different gender than they are today</p>
            </div>

          </div>

          <AppText className="our-apps-text">
            It is up to you to decide whether you would continue dating the person or if you want to move on to someone new.
          </AppText>

          <AppText className="our-apps-text">
            One More Date promises plenty of laughs and, occasionally, a few heated discussions. It’s a perfect game for a girls night, an afterwork, or getting to know new people on a deeper level.
          </AppText>

        </div>

      </div>

    </section>
  )
}

export default Ourapps