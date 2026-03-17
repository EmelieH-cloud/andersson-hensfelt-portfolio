import PropTypes from "prop-types";
import AppText from "../../Font/AppText";

function IntegrityTableSection({ id, title, headers, rows }) {

  return (
    <section id={id} className="policy-section">

      <AppText as="h2" weight={600}>
        {title}
      </AppText>

      <div className="policy-table-wrapper">

        <table className="policy-table">

          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>
                  <AppText weight={600}>{header}</AppText>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>

            {rows.map((row, index) => (

              <tr key={index}>

                <td>
                  <AppText weight={600}>
                    {row.category}
                  </AppText>
                </td>

                <td>
                  <AppText className="policy-text">
                    {row.purpose}
                  </AppText>
                </td>

                <td>
                  <AppText className="policy-text">
                    {row.legalBasis}
                  </AppText>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );

}

IntegrityTableSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      purpose: PropTypes.string.isRequired,
      legalBasis: PropTypes.string.isRequired
    })
  ).isRequired
};

export default IntegrityTableSection;