import './collabsstyle.css'

import { useTranslation } from 'react-i18next'

import Lemira from '../../../assets/pressrum/lemira.png'
import Mammasnack from '../../../assets/pressrum/mammasnack.png'
import EverydayBaby from '../../../assets/pressrum/everydaybaby.jpeg'
import InfiniteYoga from '../../../assets/pressrum/infiniteyoga.png'
import Excuviance from '../../../assets/pressrum/excuviance.png'
import MariaAkerberg from '../../../assets/pressrum/mariaakerberg.jpg'
import PageHeader from '../../shared/typography/PageHeader/PageHeader'

const Collabs = () => {
  const { t } = useTranslation('collabs')

  return (
    <section className='collabs-section'>
      <div className='collabs-container'>

        {/* HEADER */}
        <PageHeader
          className="collabs-heading"
          label="ANDERSSON & HENSFELT"
          title={t('title')}
          subtitle={t('subtitle')}
        />

        {/* MAIN CARD */}
        <div className='collabs-card'>
          <div className='collabs-card-content'>

            <span className='collabs-small-tag'>
              MOMMI COLLABS
            </span>

            <h2 className='collabs-card-title'>
              {t('heading')}
            </h2>

            <p className='collabs-text'>
              {t('text1')}
            </p>

            <p className='collabs-text'>
              {t('text2')}
            </p>

            <p className='collabs-text'>
              {t('text3')}
            </p>

            <a
              href='mailto:info@anderssonhensfelt.se'
              className='collabs-button'
            >
              {t('button')}
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
              {t('partnersTitle')}
            </h2>
          </div>

          <div className='collabs-logos-grid'>

            {/* MAMMASNACK */}
            <div className='collabs-logo-item'>
              <div className='collabs-logo-wrapper'>
                <img
                  src={Mammasnack}
                  alt='Mammasnack'
                  className='collabs-logo'
                />
              </div>

              <h3 className='collabs-company-name'>
                Mammasnack
              </h3>
            </div>

            {/* INFINITE YOGA */}
            <div className='collabs-logo-item'>
              <div className='collabs-logo-wrapper'>
                <img
                  src={InfiniteYoga}
                  alt='Infinite Yoga'
                  className='collabs-logo'
                />
              </div>

              <h3 className='collabs-company-name'>
                Infinite Yoga
              </h3>
            </div>

            {/* LEMIRA */}
            <div className='collabs-logo-item'>
              <div className='collabs-logo-wrapper'>
                <img
                  src={Lemira}
                  alt='Lemira'
                  className='collabs-logo'
                />
              </div>

              <h3 className='collabs-company-name'>
                Lemira
              </h3>
            </div>

            {/* EVERYDAY BABY */}
              <div className='collabs-logo-item'>
                <div className='collabs-logo-wrapper'>
                  <img
                    src={EverydayBaby}
                    alt='Everyday Baby'
                    className='collabs-logo'
                  />
                </div>

                <h3 className='collabs-company-name'>
                  Everyday Baby
                </h3>
              </div>
 <div className='collabs-logo-item'>
                <div className='collabs-logo-wrapper'>
                  <img
                    src={MariaAkerberg}
                    alt='Maria Akerberg'
                    className='collabs-logo'
                  />
                </div>

                <h3 className='collabs-company-name'>
                 Excuviance
                </h3>
              </div>
 <div className='collabs-logo-item'>
                <div className='collabs-logo-wrapper'>
                  <img
                    src={Excuviance}
                    alt='Excuviance'
                    className='collabs-logo'
                  />
                </div>

                <h3 className='collabs-company-name'>
                  Excuviance
                </h3>
              </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Collabs
