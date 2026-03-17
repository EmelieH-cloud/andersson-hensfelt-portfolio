import PropTypes from "prop-types";
import AppText from "../../Font/AppText";

function IntroductionTermsSection({ data }) {

  return (

    <section id={data.id} className="terms-section">

      <AppText as="h2" weight={600} className="terms-title">
        {data.title}
      </AppText>

      {data.text.map((paragraph, index) => (

        <AppText key={index} className="terms-text">
          {paragraph}
        </AppText>

      ))}


      {/* DEFINITIONS */}

      <AppText weight={600} className="terms-subtitle">
        {data.definitionsTitle}
      </AppText>

      {data.definitions.map((paragraph, index) => (

        <AppText key={index} className="terms-text">
          {paragraph}
        </AppText>

      ))}

    </section>

  );

}

IntroductionTermsSection.propTypes = {

  data: PropTypes.shape({

    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    definitionsTitle: PropTypes.string.isRequired,
    definitions: PropTypes.arrayOf(PropTypes.string).isRequired

  }).isRequired

};

export default IntroductionTermsSection;