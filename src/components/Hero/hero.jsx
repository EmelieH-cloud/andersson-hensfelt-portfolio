import './herostyle.css'
import 'animate.css'

import HERO_VIDEO from '../../assets/mommi/mommivideo.mp4'
import MOMMI_LOGO from '../../assets/mommi/mommi-logo.png'

import AppText from '../Font/AppText'

const Hero = () => {

  return (

    <section className="hero-container">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content animate__animated animate__fadeIn">

        <img
          src={MOMMI_LOGO}
          alt="Mommi logo"
          className="hero-logo"
        />

        <AppText weight={400} className="hero-intro">
          Oavsett om du är gravid, nybliven mamma eller har barn som
          blivit lite större – mommi gör det enkelt för mammor
          att träffas, med eller utan barn.
        </AppText>

      </div>

    </section>

  )
}

export default Hero