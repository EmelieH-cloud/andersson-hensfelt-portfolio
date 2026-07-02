import './pressroomstyle.css'

import { useTranslation } from 'react-i18next'

import pressPosts from './pressPosts'

const Pressroom = () => {

  const { t } = useTranslation("pressroom")

  return (

    <section className='pressroom-section'>

      <div className='pressroom-container'>

        <div className='pressroom-heading'>

          <span className='pressroom-tag'>
            ANDERSSON & HENSFELT
          </span>

          <h1 className='pressroom-title animate__animated animate__fadeInDown'>
            {t("title")}
          </h1>

          <p className='pressroom-subtitle animate__animated animate__fadeInUp'>
            {t("subtitle")}
          </p>

        </div>

        <div className='pressroom-posts'>

          {pressPosts.map((post) => (

            <article
              key={post.id}
              className='press-post animate__animated animate__fadeInUp'
            >

              <div className='press-post-content'>

                <span className='press-date'>
                  {post.date}
                </span>

                <h2 className='press-post-title'>
                  {t(post.titleKey)}
                </h2>

                <p className='press-post-text'>
                  {t(post.textKey)}
                </p>

                {post.link && (

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press-post-link"
                  >

                    {t(post.linkTextKey)}

                  </a>

                )}

              </div>

              <div className='press-images-wrapper'>

                {post.images.map((image, index) => (

                  <img
                    key={index}
                    src={image}
                    alt={`press-${index}`}
                    className='press-image'
                  />

                ))}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Pressroom