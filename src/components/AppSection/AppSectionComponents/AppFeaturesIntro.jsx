import './appfeaturesintro.css'
import AppText from '../../Font/AppText'
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

        <span className="accent-line animate-line" />

      <AppText as="h1" weight={400} className="intro-heading animate-heading">
  {appFeaturesIntro.heading}
</AppText>

       <AppText weight={400} className="intro-paragraph animate-text">
  {appFeaturesIntro.text}
</AppText>

        <span className="accent-line bottom animate-line delay" />

      </div>

    </section>
  )
}

export default AppFeaturesIntro