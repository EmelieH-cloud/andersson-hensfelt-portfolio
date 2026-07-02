import PropTypes from "prop-types";
import AppText from "../../Font/AppText";

function UserRightsSection({ id, data }) {

  return (

    <section id={id} className="integrity-section">

      <AppText
        as="h2"
        weight={600}
        className="integrity-section-title"
      >
        {data.title}
      </AppText>

      {data.intro.map((paragraph, index) => (

        <AppText
          key={index}
          className="integrity-text"
        >
          {paragraph}
        </AppText>

      ))}

      {data.rights.map((right, index) => (

        <div
          key={index}
          className="integrity-subsection"
        >

          <AppText
            as="h3"
            weight={600}
            className="integrity-subtitle"
          >
            {right.title}
          </AppText>

          {right.text.map((paragraph, i) => (

            <AppText
              key={i}
              className="integrity-text"
            >
              {paragraph}
            </AppText>

          ))}

        </div>

      ))}

      <div className="integrity-subsection">

        <AppText
          as="h3"
          weight={600}
          className="integrity-subtitle"
        >
          {data.withdrawConsent.title}
        </AppText>

        {data.withdrawConsent.text.map((paragraph, index) => (

          <AppText
            key={index}
            className="integrity-text"
          >
            {paragraph}
          </AppText>

        ))}

      </div>

    </section>

  );

}

UserRightsSection.propTypes = {
  id: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    intro: PropTypes.arrayOf(PropTypes.string).isRequired,
    rights: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ).isRequired,
    withdrawConsent: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  }).isRequired
};

export default UserRightsSection;