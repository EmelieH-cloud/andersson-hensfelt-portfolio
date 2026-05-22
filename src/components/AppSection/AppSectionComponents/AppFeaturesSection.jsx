import './appfeaturessection.css'
import MOMMIGROUP from '../../../assets/mommi/group.png'
import MOMMIVENT from '../../../assets/mommi/traff.png'
import MOMMISOK from '../../../assets/mommi/sok.png'
import { useTranslation }
from "react-i18next";

import AppText from '../../Font/AppText'

const AppFeaturesSection = () => {
  const { t } =
  useTranslation("general");

const appFeaturesSection =
  t("appFeaturesSection", {
    returnObjects: true,
  });
  return (
    <section className="app-features">

      <div className="app-features-container fade-in">

        <div className="app-features-phones">

          <div className="feature-item">
            <img src={MOMMISOK} className="phone-image" />

            <div className="feature-card">
              <h3 className="feature-title">
                <span className="bullet" />
                {appFeaturesSection.oneToOne.title}
              </h3>
              <AppText className="feature-desc" weight={400}>
             {appFeaturesSection.oneToOne.text}
              </AppText>
            </div>
          </div>

          <div className="feature-item">
            <img src={MOMMIVENT} className="phone-image" />

            <div className="feature-card">
              <h3 className="feature-title">
                <span className="bullet" />
           {appFeaturesSection.groupMeetups.title}
              </h3>
              <AppText className="feature-desc" weight={400}>
              {appFeaturesSection.groupMeetups.text}
              </AppText>
            </div>
          </div>

          <div className="feature-item">
            <img src={MOMMIGROUP} className="phone-image" />

            <div className="feature-card">
              <h3 className="feature-title">
                <span className="bullet" />
              {appFeaturesSection.groups.title}
              </h3>
              <AppText className="feature-desc" weight={400}>
              {appFeaturesSection.groups.text}
              </AppText>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default AppFeaturesSection