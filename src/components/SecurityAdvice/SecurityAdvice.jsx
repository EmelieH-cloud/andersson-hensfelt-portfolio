import "./securityadvice.css";

import { useTranslation } from "react-i18next";

import AppText from "../Font/AppText";

function SecurityAdvice() {

  const { t } = useTranslation("security");

  return (

    <section className="security-page">

      <div className="security-container">

        <AppText
          as="h1"
          weight={600}
          className="security-title"
        >
          {t("title")}
        </AppText>

        <AppText className="security-text">
          {t("intro")}
        </AppText>

        {/* APP USAGE */}

        <AppText
          as="h2"
          weight={600}
          className="security-subtitle"
        >
          {t("appUsageTitle")}
        </AppText>

        <ul className="security-list">

          <li>

            <strong>
              {t("appUsage.money.title")}
            </strong>{" "}

            {t("appUsage.money.text")}

          </li>

          <li>

            <strong>
              {t("appUsage.personalInfo.title")}
            </strong>{" "}

            {t("appUsage.personalInfo.text")}

          </li>

          <li>

            <strong>
              {t("appUsage.photos.title")}
            </strong>{" "}

            {t("appUsage.photos.text")}

          </li>

          <li>

            <strong>
              {t("appUsage.chat.title")}
            </strong>{" "}

            {t("appUsage.chat.text")}

          </li>

          <li>

            <strong>
              {t("appUsage.warning.title")}
            </strong>{" "}

            {t("appUsage.warning.text")}

          </li>

        </ul>

        {/* REAL LIFE */}

        <AppText
          as="h2"
          weight={600}
          className="security-subtitle"
        >
          {t("realLifeTitle")}
        </AppText>

        <ul className="security-list">

          <li>

            <strong>
              {t("realLife.slow.title")}
            </strong>{" "}

            {t("realLife.slow.text")}

          </li>

          <li>

            <strong>
              {t("realLife.publicPlace.title")}
            </strong>{" "}

            {t("realLife.publicPlace.text")}

          </li>

          <li>

            <strong>
              {t("realLife.tellSomeone.title")}
            </strong>{" "}

            {t("realLife.tellSomeone.text")}

          </li>

          <li>

            <strong>
              {t("realLife.leave.title")}
            </strong>{" "}

            {t("realLife.leave.text")}

          </li>

        </ul>

        {/* REPORT */}

        <AppText className="security-text security-report">

          {t("report.text1")}

          <br />
          <br />

          {t("report.text2")}

        </AppText>

      </div>

    </section>

  );

}

export default SecurityAdvice;