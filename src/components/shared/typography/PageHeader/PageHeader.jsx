import PropTypes from 'prop-types';
import AppText from '../Font/AppText';
import './pageheader.css';

function PageHeader({
  label,
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  titleAs = 'h1',
  titleWeight = 500,
}) {
  return (
    <header className={`page-header ${className}`.trim()}>
      {label && <span className="page-header-label">{label}</span>}
      <AppText as={titleAs} weight={titleWeight} className={`page-header-title ${titleClassName}`.trim()}>
        {title}
      </AppText>
      {subtitle && (
        <AppText className={`page-header-subtitle ${subtitleClassName}`.trim()}>
          {subtitle}
        </AppText>
      )}
    </header>
  );
}

PageHeader.propTypes = {
  label: PropTypes.node,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  subtitleClassName: PropTypes.string,
  titleAs: PropTypes.string,
  titleWeight: PropTypes.oneOf([300, 400, 500, 600, 700]),
};

export default PageHeader;
