import PropTypes from "prop-types";
import AppText from "../../Font/AppText";

function GeneralTermsSection({ data }) {

  return (

    <section id={data.id} className="terms-section">

      <AppText as="h2" weight={600} className="terms-title">
        {data.title}
      </AppText>

      {data.sections.map((section, index) => (

        <div
          key={index}
          id={section.id}
          className="terms-subsection"
        >

          <AppText weight={600} className="terms-subtitle">
            {section.subtitle}
          </AppText>

          {section.text.map((paragraph, i) => (

            <AppText key={i} className="terms-text">
              {paragraph}
            </AppText>

          ))}

        </div>

      ))}

    </section>

  );

}

GeneralTermsSection.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        text: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ).isRequired
  }).isRequired
};

export default GeneralTermsSection;