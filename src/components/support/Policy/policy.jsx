import './policystyle.css'
import PageHeader from '../../shared/typography/PageHeader/PageHeader'

const Policy = () => {

  return (

    <section className='policy-section'>

      <div className='policy-container'>

        {/* HEADER */}

        <PageHeader
          className="policy-header"
          label="ANDERSSON & HENSFELT"
          title="Privacy Policy for ONE MORE DATE"
          subtitle="Effective Date: 2024-09-30"
        />

        {/* CARD */}

        <div className='policy-card'>

          <div className="policy-block">

            <h3>
              1. Introduction
            </h3>

            <p>
              Welcome to the privacy policy page for the app ONE MORE DATE.

              Your privacy is important to us.

              This Privacy Policy explains that we do not collect or store any personal data during your use of our app.
            </p>

          </div>

          <div className="policy-block">

            <h3>
              2. No Collection of Data
            </h3>

            <p>
              We do not collect, store, or process any personal data from users.
            </p>

          </div>

          <div className="policy-block">

            <h3>
              3. In-App Purchases
            </h3>

            <p>
              The information regarding in-app purchases is stored in the user’s local storage solely for the purpose of restoring and managing purchases within the app.
            </p>

          </div>

          <div className="policy-block">

            <h3>
              4. Third-Party Services
            </h3>

            <p>
              ONE MORE DATE does not share or sell any personal information to third parties.

              We do not integrate with third-party services that collect personal data.
            </p>

          </div>

          <div className="policy-block">

            <h3>
              5. Changes to This Privacy Policy
            </h3>

            <p>
              We may update this privacy policy from time to time.

              Any updates will be published on this page.
            </p>

          </div>

          <div className="policy-block">

            <h3>
              6. Contact Us
            </h3>

            <p>
              If you have any questions regarding this Privacy Policy, please contact us at:
            </p>

            <p className="policy-email">
              info@anderssonhensfelt.se
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Policy
