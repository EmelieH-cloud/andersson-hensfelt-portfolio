import { useEffect } from "react";
import "./integritystyle.css";
import AppText from "../Font/AppText";
import { useTranslation }
from "react-i18next";
import IntegrityTableSection from "./IntegrityComponents/IntegrityTableSection";
import CollectedDataSection from "./IntegrityComponents/CollectedDataSection";
import IntegrityTextSection from "./IntegrityComponents/IntegrityTextSection";
import UserRightsSection from "./IntegrityComponents/UserRightsSection";
import { Link } from "react-router-dom";

function Integrity() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } =
  useTranslation("integrity");

  const introductionSection =
  t("introductionSection", {
    returnObjects: true,
  });

  const definitionClauseSection =
  t("definitionClauseSection", {
    returnObjects: true,
  });

const whoAreWeSection =
  t("whoAreWeSection", {
    returnObjects: true,
  });

const contactSection =
  t("contactSection", {
    returnObjects: true,
  });

const appliesToSection =
  t("appliesToSection", {
    returnObjects: true,
  });

const howDataIsCollectedSection =
  t("howDataIsCollectedSection", {
    returnObjects: true,
  });

const whyAndHowSection =
  t("whyAndHowSection", {
    returnObjects: true,
  });

const howIsSharedSection =
  t("howIsSharedSection", {
    returnObjects: true,
  });

const dataRetentionSection =
  t("dataRetentionSection", {
    returnObjects: true,
  });

const childrenPrivacySection =
  t("childrenPrivacySection", {
    returnObjects: true,
  });

const thirdCountryTransfersSection =
  t("thirdCountryTransfersSection", {
    returnObjects: true,
  });

const thirdPartyLoginSection =
  t("thirdPartyLoginSection", {
    returnObjects: true,
  });

const securitySection =
  t("securitySection", {
    returnObjects: true,
  });

const automatedDecisionSection =
  t("automatedDecisionSection", {
    returnObjects: true,
  });

const policyChangesSection =
  t("policyChangesSection", {
    returnObjects: true,
  });

  const userProvidedData =
  t("userProvidedData", {
    returnObjects: true,
  });

  const automaticCollectedData =
  t("automaticCollectedData", {
    returnObjects: true,
  });

  const legalMotivationTable =
  t("legalMotivationTable", {
    returnObjects: true,
  });

  const consentCollectedData =
  t("consentCollectedData", {
    returnObjects: true,
  });

  const howDataIsSharedTable =
  t("howDataIsSharedTable", {
    returnObjects: true,
  });

  const userRightsSection =
  t("userRightsSection", {
    returnObjects: true,
  });

  const toc =
  t("toc", {
    returnObjects: true,
  });

  const childSafety =
  t("childSafety", {
    returnObjects: true,
  });

  const sectionTitles =
  t("sectionTitles", {
    returnObjects: true,
  });

  const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if (element) {

      const offset = 100;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });

    }

  };

  return (

    <section className="integrity-page">

      <div className="integrity-container">

        {/* INTRO */}

        <AppText as="h1" weight={600} className="integrity-title">
          {introductionSection.title}
        </AppText>

        {introductionSection.text.map((p, i) => (
          <AppText key={i} className="policy-text">{p}</AppText>
        ))}

       <div className="child-safety-highlight">

  <AppText weight={600} className="policy-text">
    {childSafety.title}
  </AppText>

  <AppText className="policy-text">
    {childSafety.text1}
  </AppText>

  <AppText className="policy-text">
    {childSafety.text2}
  </AppText>

  <AppText className="policy-text">
    {childSafety.text3}{" "}
    <Link to="/child-safety-policy" className="policy-link">
      {childSafety.link}
    </Link>.
  </AppText>

</div>

        <AppText className="integrity-date">
          Effektivt datum: {introductionSection.date}
        </AppText>


        {/* CONTENTS */}

        <div className="toc">

          <AppText weight={600}>  {toc.title}</AppText>

          <ol>

            <li onClick={() => scrollToSection("definitioner")}>
              {toc.definitions}
            </li>

            <li onClick={() => scrollToSection("vi")}>
              {toc.whoWeAre}
            </li>

            <li onClick={() => scrollToSection("kontakt")}>
              {toc.contact}
            </li>

            <li onClick={() => scrollToSection("galler")}>
              {toc.applies}
            </li>

            <li onClick={() => scrollToSection("insamling")}>
              {toc.collection}
            </li>

            <li onClick={() => scrollToSection("anvandning")}>
              {toc.usage}
            </li>

            <li onClick={() => scrollToSection("lagliggrund")}>
              {toc.legalBasis}
            </li>

            <li onClick={() => scrollToSection("delning-text")}>
              {toc.sharingText}
            </li>

            <li onClick={() => scrollToSection("delning-tabell")}>
              {toc.sharingTable}
            </li>

            <li onClick={() => scrollToSection("rattigheter")}>
              {toc.rights}
            </li>

            <li onClick={() => scrollToSection("lagring")}>
              {toc.storage}
            </li>

            <li onClick={() => scrollToSection("barn")}>
              {toc.children}
            </li>

            <li onClick={() => scrollToSection("overforingar")}>
              {toc.transfers}
            </li>

            <li onClick={() => scrollToSection("tredjepart")}>
              {toc.thirdParty}
            </li>

            <li onClick={() => scrollToSection("sakerhet")}>
              {toc.security}
            </li>

            <li onClick={() => scrollToSection("automatiserade-beslut")}>
              {toc.automated}
            </li>

            <li onClick={() => scrollToSection("policy-andringar")}>
              {toc.changes}
            </li>

          </ol>

        </div>


        {/* DEFINITIONER */}

        <IntegrityTextSection
          id="definitioner"
          {...definitionClauseSection}
        />


        {/* TEXT SECTIONS */}

        <IntegrityTextSection id="vi" {...whoAreWeSection} />
        <IntegrityTextSection id="kontakt" {...contactSection} />
        <IntegrityTextSection id="galler" {...appliesToSection} />

        <IntegrityTextSection
          id="insamling"
          {...howDataIsCollectedSection}
        />


        {/* DATA TYPES */}

      <CollectedDataSection
  title={sectionTitles.providedData}
  items={userProvidedData}
  type="letters"
/>

<CollectedDataSection
  title={sectionTitles.automaticData}
  items={automaticCollectedData}
  type="letters"
/>

<CollectedDataSection
  title={sectionTitles.consentData}
  items={consentCollectedData}
  type="letters"
/>

        {/* WHY */}

        <IntegrityTextSection
          id="anvandning"
          {...whyAndHowSection}
        />


        {/* LEGAL BASIS TABLE */}

        <IntegrityTableSection
          id="lagliggrund"
          title={sectionTitles.legalBasis}
          headers={legalMotivationTable.headers}
          rows={legalMotivationTable.rows}
        />


        {/* SHARING TEXT */}

        <IntegrityTextSection
          id="delning-text"
          {...howIsSharedSection}
        />


        {/* SHARING TABLE */}

        <IntegrityTableSection
          id="delning-tabell"
          title={sectionTitles.sharingRecipients}
          headers={howDataIsSharedTable.headers}
          rows={howDataIsSharedTable.rows}
        />


        {/* RIGHTS */}

        <UserRightsSection
          id="rattigheter"
          data={userRightsSection}
        />


        {/* OTHER SECTIONS */}

        <IntegrityTextSection id="lagring" {...dataRetentionSection} />
        <IntegrityTextSection id="barn" {...childrenPrivacySection} />
        <IntegrityTextSection id="overforingar" {...thirdCountryTransfersSection} />
        <IntegrityTextSection id="tredjepart" {...thirdPartyLoginSection} />
        <IntegrityTextSection id="sakerhet" {...securitySection} />
        <IntegrityTextSection id="automatiserade-beslut" {...automatedDecisionSection} />
        <IntegrityTextSection id="policy-andringar" {...policyChangesSection} />

      </div>

    </section>

  );

}

export default Integrity;