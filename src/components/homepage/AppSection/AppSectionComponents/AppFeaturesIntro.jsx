import './appfeaturesintro.css'
import AppText from '../../../shared/typography/Font/AppText'
import { useTranslation }
from "react-i18next";

const AppFeaturesIntro = () => {

  const { t } =
  useTranslation("general");

const appFeaturesIntro =
  t("appFeaturesIntro", {
    returnObjects: true,
  });
  return (
    <section className="app-features-intro">

      <div className="app-features-intro-container">

        <span className="accent-line accent-line--over-heading animate-line" />

        <AppText as="h1" weight={400} className="intro-heading animate-heading">
          {appFeaturesIntro.heading}
        </AppText>

        <span className="accent-line accent-line--under-heading animate-line delay" />

        <AppText weight={600} className="intro-paragraph animate-text">
          {appFeaturesIntro.text}
        </AppText>

      </div>

    </section>
  )
}

export default AppFeaturesIntro
