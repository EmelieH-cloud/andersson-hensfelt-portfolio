import './childsafetypolicy.css'

const ChildSafetyPolicy = () => {
  return (
    <section className='child-safety-section'>

      <div className='child-safety-container'>

        <h1 className="child-safety-title">Child Safety Standards</h1>
        <h2 className="child-safety-subtitle">mommi</h2>

        <p className="child-safety-date">Last updated: 2026-04-16</p>

        <div className="child-safety-block">
          <h3>1. Introduction</h3>
          <p>
            At mommi, developed by Andersson & Hensfelt AB, the safety of our users is our highest priority.
            We are committed to maintaining a safe and respectful environment for everyone using our platform.
          </p>
          <p>
            In accordance with Google Play’s Child Safety Standards, we have established the following policies
            to prevent child sexual abuse and exploitation (CSAE) and to comply with applicable child safety laws.
          </p>
        </div>

        <div className="child-safety-block">
          <h3>2. Definitions</h3>
          <p>
            Child Sexual Abuse and Exploitation (CSAE) refers to any behavior or content that exploits, abuses, or endangers children,
            including grooming or coercion.
          </p>
          <p>
            Child Sexual Abuse Material (CSAM) refers to any visual depiction of a minor engaged in sexually explicit conduct,
            including images, videos, or computer-generated content. This is illegal and strictly prohibited.
          </p>
        </div>

        <div className="child-safety-block">
          <h3>3. Zero Tolerance for CSAE</h3>
          <p>
            We enforce a strict zero-tolerance policy for child sexual abuse and exploitation.
            Any account found engaging in such activities will be permanently banned and may be reported to relevant authorities.
          </p>
        </div>

        <div className="child-safety-block">
          <h3>4. Prohibited Content and Behavior</h3>
          <p>
            mommi strictly prohibits:
          </p>
          <p>
            - Sharing, requesting, or promoting CSAM<br />
            - Grooming or exploiting minors<br />
            - Any content or communication that violates child safety laws
          </p>
        </div>

        <div className="child-safety-block">
          <h3>5. Age Requirements</h3>
          <p>
            mommi is strictly limited to users who are <strong>18 years of age or older</strong>.
          </p>
          <p>
            Users must provide accurate age information during registration.
            We do not knowingly allow individuals under 18 to use the platform.
          </p>
          <p>
            Accounts suspected of false age information will be reviewed and may be removed.
          </p>
        </div>

        <div className="child-safety-block">
          <h3>6. Reporting Mechanism</h3>
          <p>
            Users can report content, profiles, or messages directly within the app using built-in reporting features.
          </p>
          <p>
            Reports should include relevant details to assist our review process.
            All reports are handled promptly and escalated when necessary.
          </p>
        </div>

        <div className="child-safety-block">
          <h3>7. Handling of CSAM</h3>
          <p>
            When we become aware of CSAM:
          </p>
          <p>
            - Content is removed immediately<br />
            - Accounts involved are permanently banned<br />
            - Reports are submitted to relevant authorities in accordance with applicable laws
          </p>
        </div>

        <div className="child-safety-block">
          <h3>8. Moderation and Enforcement</h3>
          <p>
            We actively monitor and review user activity to detect violations.
            Failure to comply with this policy may result in account suspension, removal, or reporting to law enforcement.
          </p>
        </div>

        <div className="child-safety-block">
          <h3>9. Compliance with Laws</h3>
          <p>
            We comply with all applicable child protection laws and regulations,
            including obligations related to reporting and prevention of exploitation.
          </p>
        </div>

        <div className="child-safety-block">
          <h3>10. Cooperation with Authorities</h3>
          <p>
            We cooperate fully with law enforcement authorities in cases involving child safety violations.
          </p>
        </div>

        <div className="child-safety-block">
          <h3>11. Contact</h3>
          <p>
            For child safety concerns or reports, please contact us:
          </p>
          <p className="child-safety-email">
            info@anderssonhensfelt.se
          </p>
        </div>

        <div className="child-safety-block">
          <h3>12. Emergency</h3>
          <p>
            If you believe a child is in immediate danger, please contact your local law enforcement authorities immediately.
          </p>
        </div>

      </div>

    </section>
  );
};

export default ChildSafetyPolicy;