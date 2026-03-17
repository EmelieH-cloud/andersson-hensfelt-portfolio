import PropTypes from "prop-types";
import AppText from "../../Font/AppText";

function UserResponsibilitiesSection({ data }) {

  return (

    <section id={data.id} className="terms-section">

      <AppText as="h2" weight={600} className="terms-title">
        {data.title}
      </AppText>


      {/* INTRO */}

      {data.intro.map((paragraph, index) => (

        <AppText key={index} className="terms-text">
          {paragraph}
        </AppText>

      ))}


      {/* CONFIRM */}

      <AppText weight={600} className="terms-subtitle">
        {data.confirmTitle}
      </AppText>

      <ul className="terms-list">

        {data.confirmList.map((item, index) => (

          <li key={index}>

            <AppText className="terms-text">
              {item}
            </AppText>

          </li>

        ))}

      </ul>


      {data.confirmText.map((paragraph, index) => (

        <AppText key={index} className="terms-text">
          {paragraph}
        </AppText>

      ))}


      {/* AGREEMENTS */}

      <AppText weight={600} className="terms-subtitle">
        {data.agreeTitle}
      </AppText>

      <ul className="terms-list">

        {data.agreeList.map((item, index) => (

          <li key={index}>

            <AppText className="terms-text">
              {item}
            </AppText>

          </li>

        ))}

      </ul>


      {data.revokeText.map((paragraph, index) => (

        <AppText key={index} className="terms-text">
          {paragraph}
        </AppText>

      ))}


      {/* PROHIBITED */}

      <AppText weight={600} className="terms-subtitle">
        {data.prohibitedTitle}
      </AppText>

      <ul className="terms-list">

        {data.prohibitedList.map((item, index) => (

          <li key={index}>

            <AppText className="terms-text">
              {item}
            </AppText>

          </li>

        ))}

      </ul>

    </section>

  );

}

UserResponsibilitiesSection.propTypes = {
  data: PropTypes.object.isRequired
};

export default UserResponsibilitiesSection;