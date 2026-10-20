import "./aboutmommi.css";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import AppText from "../../shared/typography/Font/AppText";
import PageHeader from "../../shared/typography/PageHeader/PageHeader";

import Signatur1 from "../../../assets/founders/alinia_sign.png";
import Signatur2 from "../../../assets/founders/emelie_sign.png";
import founders from "../../../assets/founders/founderspic2.png";

function AboutMommi() {
  const { t } = useTranslation("general");

  const [loaded, setLoaded] = useState(false);

  return (
    <section className="aboutmommi-section">
      <PageHeader
        className="aboutmommi-page-header"
        label={t("aboutMommi.tag")}
        title={t("aboutMommi.title")}
        subtitle={t("aboutMommi.intro")}
      />

      <div className="aboutmommi-container">

        {/* IMAGE */}
        <div className="aboutmommi-image-wrapper">
          <img
            src={founders}
            className={`aboutmommi-image ${loaded ? "loaded" : ""}`}
            onLoad={() => setLoaded(true)}
            alt="Founders"
          />
        </div>

        {/* TEXT */}
        <div className="aboutmommi-content">
          <AppText className="aboutmommi-text">
            {t("aboutMommi.text1")}
          </AppText>

          <AppText className="aboutmommi-text">
            {t("aboutMommi.text2")}
          </AppText>

          <AppText className="aboutmommi-text">
            {t("aboutMommi.text3")}
          </AppText>

          <AppText className="aboutmommi-text">
            {t("aboutMommi.text4")}
          </AppText>

          <AppText className="aboutmommi-text">
            {t("aboutMommi.text5")}
          </AppText>

          <AppText className="aboutmommi-text">
            {t("aboutMommi.text6")}
          </AppText>

          <AppText className="aboutmommi-text">
            {t("aboutMommi.text7")}
          </AppText>

          {/* SIGNATURES */}
          <div className="aboutmommi-signature-area">

            <div className="aboutmommi-signatures">

              <img
                src={Signatur1}
                className="aboutmommi-signature-img"
                alt="signature"
              />

              <img
                src={Signatur2}
                className="aboutmommi-signature-img"
                alt="signature"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutMommi;
