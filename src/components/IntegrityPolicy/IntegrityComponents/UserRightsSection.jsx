import PropTypes from "prop-types";
import AppText from "../../Font/AppText";

function UserRightsSection({ id, data }) {

  return (

    <section id={id} className="policy-section">

      {/* TITLE */}

      <AppText as="h2" weight={600}>
        {data.title}
      </AppText>

      {/* INTRO */}

      {data.intro.map((paragraph, index) => (

        <AppText key={index} className="policy-text">
          {paragraph}
        </AppText>

      ))}

      {/* RIGHTS */}

      {data.rights.map((right, index) => (

        <div key={index} className="policy-subsection">

          <AppText as="h3" weight={600} className="policy-subtitle">
            {right.title}
          </AppText>

          {right.text.map((paragraph, i) => (

            <AppText key={i} className="policy-text">
              {paragraph}
            </AppText>

          ))}

        </div>

      ))}

      {/* WITHDRAW CONSENT */}

      <div className="policy-subsection">

        <AppText as="h3" weight={600} className="policy-subtitle">
          {data.withdrawConsent.title}
        </AppText>

        {data.withdrawConsent.text.map((paragraph, index) => (

          <AppText key={index} className="policy-text">
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