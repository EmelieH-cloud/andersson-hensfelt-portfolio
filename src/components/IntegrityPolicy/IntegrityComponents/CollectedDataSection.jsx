import PropTypes from "prop-types";
import AppText from "../../Font/AppText";

function CollectedDataSection({ title, items, type = "number" }) {

  const listType = type === "letters" ? "a" : undefined;

  return (
    <div className="policy-subsection">

      <AppText as="h3" weight={600} className="policy-subtitle">
        {title}
      </AppText>

      <ol type={listType} className="policy-letter-list">

        {items.map((item, index) => (
          <li key={index} className="policy-item">

            <AppText weight={600}>
              {item.title}
            </AppText>

            {item.text.map((paragraph, i) => (
              <AppText key={i} className="policy-text">
                {paragraph}
              </AppText>
            ))}

          </li>
        ))}

      </ol>

    </div>
  );
}

CollectedDataSection.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["number", "letters"]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default CollectedDataSection;