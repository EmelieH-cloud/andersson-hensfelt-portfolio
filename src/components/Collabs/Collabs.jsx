import './collabsstyle.css'

import { useTranslation } from 'react-i18next'

import Mammasnack from '../../assets/pressrum/mammasnack.png'

const Collabs = () => {

  const { t } = useTranslation("collabs")

  return (

    <section className='collabs-section'>

      <div className='collabs-container'>

        {/* HEADER */}

        <div className='collabs-heading'>

          <span className='collabs-tag'>
            ANDERSSON & HENSFELT
          </span>

          <h1 className='collabs-title'>
            {t("title")}
          </h1>

          <p className='collabs-subtitle'>
            {t("subtitle")}
          </p>

        </div>

        {/* MAIN CARD */}

        <div className='collabs-card'>

          <div className='collabs-card-content'>

            <span className='collabs-small-tag'>
              MOMMI COLLABS
            </span>

            <h2 className='collabs-card-title'>
              {t("heading")}
            </h2>

            <p className='collabs-text'>
              {t("text1")}
            </p>

            <p className='collabs-text'>
              {t("text2")}
            </p>

            <p className='collabs-text'>
              {t("text3")}
            </p>

            <a
              href="mailto:info@anderssonhensfelt.se"
              className='collabs-button'
            >
              {t("button")}
            </a>

          </div>

        </div>

        {/* PREVIOUS COLLABS */}

        <div className='collabs-partners-card'>

          <div className='collabs-partners-header'>

            <span className='collabs-small-tag'>
              PARTNERS
            </span>

            <h2 className='collabs-partners-title'>
              {t("partnersTitle")}
            </h2>

          </div>

          <div className='collabs-logos-grid'>

            <div className='collabs-logo-item'>

              <img
                src={Mammasnack}
                alt="Mammasnack"
                className='collabs-logo'
              />

              <h3 className='collabs-company-name'>
                Mammasnack
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Collabs