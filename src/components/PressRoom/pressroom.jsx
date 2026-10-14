import './pressroomstyle.css'

import { useTranslation } from 'react-i18next'

import pressPosts from './pressPosts'

const Pressroom = () => {
  const { t } = useTranslation('pressroom')

  // Sorterar pressinläggen efter datum.
  // Senaste inlägget visas först.
  // [...pressPosts] gör en kopia så att original-arrayen inte ändras.
  const sortedPressPosts = [...pressPosts].sort(
    (a, b) => new Date(b.sortDate) - new Date(a.sortDate)
  )

  return (
    <section className="pressroom-section">
      <div className="pressroom-container">

        {/* HEADER */}
        <div className="pressroom-heading">

          <span className="pressroom-tag">
            ANDERSSON & HENSFELT
          </span>

          <h1 className="pressroom-title animate__animated animate__fadeInDown">
            {t('title')}
          </h1>

          <p className="pressroom-subtitle animate__animated animate__fadeInUp">
            {t('subtitle')}
          </p>

        </div>


        {/* POSTS */}
        <div className="pressroom-posts">

          {sortedPressPosts.map((post) => (
            <article
              key={post.id}
              className="press-post animate__animated animate__fadeInUp"
            >

              {/* ARTICLE TEXT */}
              <div className="press-post-content">

                <span className="press-date">
                  {post.date}
                </span>

                <h2 className="press-post-title">
                  {t(post.titleKey)}
                </h2>

                <p className="press-post-text">
                  {t(post.textKey)}
                </p>


                {/* EXTERNAL LINK */}
                {post.link && (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press-post-link"
                  >
                    {t(post.linkTextKey)}

                    <span className="press-link-arrow">
                      ↗
                    </span>
                  </a>
                )}

              </div>


              {/* IMAGES */}
              {post.images && post.images.length > 0 && (
                <div
                  className={`press-images-wrapper press-images-${post.images.length}`}
                >

                  {post.images.map((image, index) => (
                    <figure
                      key={`${post.id}-${index}`}
                      className={`press-image-item press-image-item-${index + 1}`}
                    >

                      <img
                        src={image}
                        alt={`${t(post.titleKey)} - ${index + 1}`}
                        className="press-image"
                        loading="lazy"
                      />

                    </figure>
                  ))}

                </div>
              )}

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Pressroom