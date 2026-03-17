import PropTypes from "prop-types";
import AppText from "../../Font/AppText";

function FooterColumn({ title, children }) {

  return (

    <div className="footer-column">

      {title && (
        <AppText as="h3" weight={600} className="footer-title">
          {title}
        </AppText>
      )}

      {children}

    </div>

  );

}

FooterColumn.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default FooterColumn;