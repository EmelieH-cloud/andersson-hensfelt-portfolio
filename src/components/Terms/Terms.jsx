import { useEffect } from "react";
import "./termsstyle.css";

import AppText from "../Font/AppText";
import ContentRulesSection from "./TermsComponents/ContentRulesSection";
import GeneralTermsSection from "./TermsComponents/GeneralTermsSection";
import UserResponsibilitiesSection from "./TermsComponents/UserResponsibilitesSection";
import { introductionTermsData } from "./data/introductionTermsData";
import IntroductionTermsSection from "./TermsComponents/IntroductionTermsSection";
import { contentRulesData } from "./data/contentRulesData";
import {generalTermsData} from "./data/generalTermsData";
import {userResponsibilitiesData} from "./data/userResponsibilitesData";

function Terms() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if (element) {

      const offset = 110;

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

    <section className="terms-page">

      <div className="terms-container">

        {/* TITLE */}


        <AppText as="h1" weight={600} className="terms-main-title">
          Användarvillkor
        </AppText>

<IntroductionTermsSection
  data={introductionTermsData}
/>

        {/* CONTENTS */}

        <div className="terms-toc">

          <AppText weight={600}>
            Innehåll
          </AppText>

          <ol>

            <li onClick={() => scrollToSection("responsibilities")}>
              Ditt ansvar
            </li>

            <li onClick={() => scrollToSection("content-rules")}>
              Innehåll
            </li>

            <li onClick={() => scrollToSection("privacy")}>
              Integritet
            </li>

            <li onClick={() => scrollToSection("license")}>
              Rättigheter du ger mommi
            </li>

            <li onClick={() => scrollToSection("termination")}>
              Avslut av konto
            </li>

            <li onClick={() => scrollToSection("security")}>
              Säkerhet och ansvar
            </li>

            <li onClick={() => scrollToSection("liability")}>
              Ansvarsfriskrivning
            </li>

            <li onClick={() => scrollToSection("ads")}>
              Annonser och innehåll från tredje part
            </li>

            <li onClick={() => scrollToSection("law")}>
              Tillämplig lag och tvist
            </li>

            <li onClick={() => scrollToSection("changes")}>
              Ändringar av användarvillkoren
            </li>

          </ol>

        </div>



        {/* USER RESPONSIBILITIES */}

        <UserResponsibilitiesSection
          id="responsibilities"
          data={userResponsibilitiesData}
        />



        {/* CONTENT RULES */}

        <ContentRulesSection
          id="content-rules"
          data={contentRulesData}
        />



        {/* GENERAL TERMS */}

        <GeneralTermsSection
          data={generalTermsData}
        />



      </div>

    </section>

  );

}

export default Terms;