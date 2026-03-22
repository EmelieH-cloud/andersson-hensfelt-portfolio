import './policystyle.css'

const Policy = () => {
  return (
    <section className='policy-section'>

      <div className='policy-container'>

        <h1 className="policy-title">Privacy Policy for ONE MORE DATE</h1>

        <p className="policy-date">Effective Date: 2024-09-30</p>

        <div className="policy-block">
          <h3>1. Introduction</h3>
          <p>
            Welcome to the privacy policy page for the app ONE MORE DATE. Your privacy is important to us. 
            This Privacy Policy explains that we do not collect or store any personal data during your use of our app.
          </p>
        </div>

        <div className="policy-block">
          <h3>2. No Collection of Data</h3>
          <p>
            We do not collect, store, or process any personal data from users.
          </p>
        </div>

        <div className="policy-block">
          <h3>3. In-App-Purchases </h3>
          <p>
            The information regarding in-app purchases is stored in the users local storage solely for the purpose of restoring and managing the purchases within the app. 
          </p>
        </div>

        <div className="policy-block">
          <h3>4. Third-Party Services</h3>
          <p>
            The app ONE MORE DATE does not share or sell any personal information to third parties. We do not integrate with any third-party services that collect personal data.
          </p>
        </div>

        <div className="policy-block">
          <h3>5. Changes to This Privacy Policy</h3>
          <p>
            We will notify you if any changes are made to this privacy policy by posting the new Privacy Policy.
          </p>
        </div>

        <div className="policy-block">
          <h3>6. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="policy-email">
            info@anderssonhensfelt.se
          </p>
        </div>

      </div>

    </section>
  );
};

export default Policy;