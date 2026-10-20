import PropTypes from 'prop-types'
import './presspostskeleton.css'

export default function PressPostSkeleton({ label, count = 2 }) {
  return (
    <div className="press-skeleton-list" role="status" aria-label={label}>
      <span className="press-skeleton-sr-only">{label}</span>
      {Array.from({ length: count }, (_, index) => (
        <article className="press-skeleton-card" aria-hidden="true" key={`press-skeleton-${index}`}>
          <div className="press-skeleton-content">
            <span className="press-skeleton-line press-skeleton-date" />
            <span className="press-skeleton-line press-skeleton-title" />
            <span className="press-skeleton-line press-skeleton-copy press-skeleton-copy-long" />
            <span className="press-skeleton-line press-skeleton-copy" />
            <span className="press-skeleton-line press-skeleton-copy press-skeleton-copy-short" />
          </div>
          <div className="press-skeleton-image" />
        </article>
      ))}
    </div>
  )
}

PressPostSkeleton.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number,
}
