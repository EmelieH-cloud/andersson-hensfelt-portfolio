import PropTypes from 'prop-types'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { getPressPostImages } from './pressPosts'
import './pressroomstyle.css'

export default function PressPostPreview({ title, description, date, link, imageKey, imageFiles }) {
  const { t } = useTranslation('pressroom')
  const uploadedImageUrls = useMemo(
    () => imageFiles.map((file) => URL.createObjectURL(file)),
    [imageFiles],
  )
  const images = [...getPressPostImages(imageKey), ...uploadedImageUrls]

  useEffect(() => () => uploadedImageUrls.forEach((url) => URL.revokeObjectURL(url)), [uploadedImageUrls])

  const getLinkText = () => {
    if (link?.includes('sverigesradio.se')) return t('srLinkText')
    if (link?.includes('svt.se')) return t('svtLinkText')
    return t('readArticle')
  }

  return (
    <article className="press-post press-post-preview-card">
      <div className="press-post-content">
        {date && <span className="press-date">{date}</span>}
        <h2 className="press-post-title">{title}</h2>
        <p className="press-post-text">{description}</p>
        {link && (
          <a href={link} className="press-post-link" onClick={(event) => event.preventDefault()}>
            {getLinkText()}
            <span className="press-link-arrow">↗</span>
          </a>
        )}
      </div>
      {images.length > 0 && (
        <div className={`press-images-wrapper press-images-${images.length}`}>
          {images.map((image, index) => (
            <figure className={`press-image-item press-image-item-${index + 1}`} key={`${image}-${index}`}>
              <img src={image} alt="" className="press-image" />
            </figure>
          ))}
        </div>
      )}
    </article>
  )
}

PressPostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
  link: PropTypes.string,
  imageKey: PropTypes.string,
  imageFiles: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired,
}
