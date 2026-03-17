import { useEffect } from "react";
import "./integritystyle.css";
import AppText from "../Font/AppText";

import IntegrityTableSection from "./IntegrityComponents/IntegrityTableSection";
import CollectedDataSection from "./IntegrityComponents/CollectedDataSection";
import IntegrityTextSection from "./IntegrityComponents/IntegrityTextSection";
import UserRightsSection from "./IntegrityComponents/UserRightsSection";

import { legalMotivationTable } from "./data/legalMotivationTable";
import { howDataIsSharedTable } from "./data/howDataIsSharedTable";

import { userProvidedData } from "./data/userProvidedData";
import { automaticCollectedData } from "./data/automaticCollectedData";
import { consentCollectedData } from "./data/consentCollectedData";

import { userRightsSection } from "./data/userRightsSection";

import {
  introductionSection,
  definitionClauseSection,
  whoAreWeSection,
  contactSection,
  appliesToSection,
  howDataIsCollectedSection,
  whyAndHowSection,
  howIsSharedSection,
  dataRetentionSection,
  childrenPrivacySection,
  thirdCountryTransfersSection,
  thirdPartyLoginSection,
  securitySection,
  automatedDecisionSection,
  policyChangesSection
} from "./data/integrityTextSections";

function Integrity() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

        <AppText className="integrity-date">
          Effektivt datum: {introductionSection.date}
        </AppText>


        {/* CONTENTS */}

        <div className="toc">

          <AppText weight={600}>Innehåll</AppText>

          <ol>

            <li onClick={() => scrollToSection("definitioner")}>
              Definitioner
            </li>

            <li onClick={() => scrollToSection("vi")}>
              Vilka är vi
            </li>

            <li onClick={() => scrollToSection("kontakt")}>
              Kontaktuppgifter
            </li>

            <li onClick={() => scrollToSection("galler")}>
              Där policyn gäller
            </li>

            <li onClick={() => scrollToSection("insamling")}>
              Hur vi samlar in uppgifter
            </li>

            <li onClick={() => scrollToSection("anvandning")}>
              Varför vi använder uppgifter
            </li>

            <li onClick={() => scrollToSection("lagliggrund")}>
              Hur vi behandlar personuppgifter
            </li>

            <li onClick={() => scrollToSection("delning-text")}>
              Hur vi delar uppgifter
            </li>

            <li onClick={() => scrollToSection("delning-tabell")}>
              Mottagare av uppgifter
            </li>

            <li onClick={() => scrollToSection("rattigheter")}>
              Dina rättigheter
            </li>

            <li onClick={() => scrollToSection("lagring")}>
              Hur länge vi lagrar uppgifter
            </li>

            <li onClick={() => scrollToSection("barn")}>
              Barns integritet
            </li>

            <li onClick={() => scrollToSection("overforingar")}>
              Tredje land
            </li>

            <li onClick={() => scrollToSection("tredjepart")}>
              Inloggning via tredje part
            </li>

            <li onClick={() => scrollToSection("sakerhet")}>
              Säkerhet
            </li>

            <li onClick={() => scrollToSection("automatiserade-beslut")}>
              Automatiserat beslutsfattande
            </li>

            <li onClick={() => scrollToSection("policy-andringar")}>
              Ändringar av policyn
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
  title="1. Personuppgifter du själv lämnar till oss"
  items={userProvidedData}
  type="letters"
/>

<CollectedDataSection
  title="2. Personuppgifter som samlas in automatiskt"
  items={automaticCollectedData}
  type="letters"
/>

<CollectedDataSection
  title="3. Personuppgifter som samlas in med ditt samtycke"
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
          title="Hur vi behandlar personuppgifter"
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
          title="Mottagare av personuppgifter"
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