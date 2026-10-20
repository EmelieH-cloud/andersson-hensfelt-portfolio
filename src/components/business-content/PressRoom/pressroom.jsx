import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Query } from 'appwrite'
import { FiTrash2 } from 'react-icons/fi'
import { appwriteDatabaseId, appwritePressTableId, tablesDB } from '../../../../appwrite'
import useAdminAuth from '../../admin/Admin/useAdminAuth'
import PageHeader from '../../shared/typography/PageHeader/PageHeader'
import PressPostSkeleton from './PressPostSkeleton'
import { getPressPostImages } from './pressPosts'
import './pressroomstyle.css'

const Pressroom = () => {
  const { t, i18n } = useTranslation('pressroom')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [deleteError, setDeleteError] = useState(false)
  const [deletingId, setDeletingId] = useState('')
  const { status, user } = useAdminAuth()
  const isAdmin = status === 'authenticated' && Boolean(user)
  const language = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'sv'

  const deletePost = async (post) => {
    if (!window.confirm(t('confirmDelete', { title: post.title }))) return

    setDeletingId(post.$id)
    setDeleteError(false)
    try {
      await tablesDB.deleteRow({
        databaseId: appwriteDatabaseId,
        tableId: appwritePressTableId,
        rowId: post.$id,
      })
      setPosts((current) => current.filter((item) => item.$id !== post.$id))
    } catch {
      setDeleteError(true)
    } finally {
      setDeletingId('')
    }
  }

  useEffect(() => {
    let active = true
    setLoading(true)
    setLoadError(false)

    tablesDB.listRows({
      databaseId: appwriteDatabaseId,
      tableId: appwritePressTableId,
      // The current press table is small; filtering/sorting here avoids requiring a DB index.
      queries: [Query.limit(100)],
      total: false,
    }).then(({ rows }) => {
      if (active) {
        setPosts(rows
          .filter((row) => row.language === language)
          .sort((a, b) => Number(a.order) - Number(b.order)))
      }
    }).catch(() => {
      if (active) {
        setPosts([])
        setLoadError(true)
      }
    }).finally(() => {
      if (active) setLoading(false)
    })

    return () => { active = false }
  }, [language])

  const getLinkText = (link) => {
    if (link?.includes('sverigesradio.se')) return t('srLinkText')
    if (link?.includes('svt.se')) return t('svtLinkText')
    return t('readArticle')
  }

  return (
    <section className="pressroom-section">
      <div className="pressroom-container">
        <PageHeader
          className="pressroom-heading"
          label="ANDERSSON & HENSFELT"
          title={t('title')}
          subtitle={t('subtitle')}
          titleClassName="animate__animated animate__fadeInDown"
          subtitleClassName="animate__animated animate__fadeInUp"
        />

        {loading && <PressPostSkeleton label={t('loadingPosts')} />}
        {loadError && <p className="pressroom-message" role="alert">{t('loadPostsError')}</p>}
        {deleteError && <p className="pressroom-message pressroom-delete-error" role="alert">{t('deletePostError')}</p>}
        {!loading && !loadError && posts.length === 0 && (
          <p className="pressroom-message">{t('noPosts')}</p>
        )}

        {!loading && !loadError && posts.length > 0 && (
          <div className="pressroom-posts">
            {posts.map((post) => {
              const images = getPressPostImages(post.imageKey)

              return (
                <article
                  key={post.$id}
                  className="press-post animate__animated animate__fadeInUp"
                >
                  {isAdmin && (
                    <button
                      type="button"
                      className="press-post-delete"
                      onClick={() => deletePost(post)}
                      disabled={deletingId === post.$id}
                      aria-label={t('deletePost', { title: post.title })}
                      title={t('deletePost', { title: post.title })}
                    >
                      <FiTrash2 aria-hidden="true" />
                      <span>{deletingId === post.$id ? t('deletingPost') : t('deletePostShort')}</span>
                    </button>
                  )}
                  <div className="press-post-content">
                    <span className="press-date">{post.date}</span>
                    <h2 className="press-post-title">{post.title}</h2>
                    <p className="press-post-text">{post.description}</p>

                    {post.link && (
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="press-post-link"
                      >
                        {getLinkText(post.link)}
                        <span className="press-link-arrow">↗</span>
                      </a>
                    )}
                  </div>

                  {images.length > 0 && (
                    <div className={`press-images-wrapper press-images-${images.length}`}>
                      {images.map((image, index) => (
                        <figure
                          key={`${post.$id}-${index}`}
                          className={`press-image-item press-image-item-${index + 1}`}
                        >
                          <img
                            src={image}
                            alt={`${post.title} - ${index + 1}`}
                            className="press-image"
                            loading="lazy"
                          />
                        </figure>
                      ))}
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default Pressroom
