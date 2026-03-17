import PropTypes from "prop-types";
import AppText from "../../Font/AppText";

function IntegrityTextSection({ id, title, text }) {

  return (
    <section id={id} className="policy-section">

      <AppText as="h2" weight={600}>
        {title}
      </AppText>

      {text.map((paragraph, index) => (
        <AppText key={index} className="policy-text">
          {paragraph}
        </AppText>
      ))}

    </section>
  );

}

IntegrityTextSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IntegrityTextSection;