import PropTypes from "prop-types";
import AppText from "../../Font/AppText";

function ContentRulesSection({ data }) {

  return (

    <section id={data.id} className="terms-section">

      <AppText as="h2" weight={600} className="terms-title">
        {data.title}
      </AppText>


      {/* USER CONTENT */}

      <AppText weight={600} className="terms-subtitle">
        {data.userContentTitle}
      </AppText>

      {data.userContentText.map((p, i) => (
        <AppText key={i} className="terms-text">{p}</AppText>
      ))}


      {/* OTHER USERS */}

      <AppText weight={600} className="terms-subtitle">
        {data.otherUsersTitle}
      </AppText>

      {data.otherUsersText.map((p, i) => (
        <AppText key={i} className="terms-text">{p}</AppText>
      ))}


      {/* PLATFORM CONTENT */}

      <AppText weight={600} className="terms-subtitle">
        {data.platformContentTitle}
      </AppText>

      {data.platformContentText.map((p, i) => (
        <AppText key={i} className="terms-text">{p}</AppText>
      ))}


      {/* REPORTING */}

      <AppText weight={600} className="terms-subtitle">
        {data.reportingTitle}
      </AppText>

      {data.reportingText.map((p, i) => (
        <AppText key={i} className="terms-text">{p}</AppText>
      ))}

    </section>

  );

}

ContentRulesSection.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContentRulesSection;