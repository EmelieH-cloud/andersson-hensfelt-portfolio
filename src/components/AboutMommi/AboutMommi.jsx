import "./aboutmommi.css";

import AppText from "../Font/AppText";

import Signatur1 from "../../assets/founders/signatur1.png";
import Signatur2 from "../../assets/founders/signatur2.png";
import founders from "../../assets/founders/founders.png";

function AboutMommi() {
  return (
    <section className="aboutmommi-section">

      <div className="aboutmommi-container">

        {/* 🔥 IMAGE FIRST */}
        <div className="aboutmommi-image-wrapper">
          <img src={founders} className="aboutmommi-image" />
        </div>

        {/* 🔥 ALL TEXT SAMMAN */}
        <div className="aboutmommi-content">

          <AppText as="h1" weight={600} className="aboutmommi-title">
            Om mommi
          </AppText>

          <AppText className="aboutmommi-intro">
            Hej och välkommen till vår app!
          </AppText>

          <AppText className="aboutmommi-text">
            Grundarna till <strong>mommi</strong> är vi – Emelie och Alinia.
            Vi skapade appen med en enkel tanke i grunden:
            att det ska vara lättare för mammor att hitta varandra.
          </AppText>

          <AppText className="aboutmommi-text">
            Idén började ta form när Alinia var gravid.
            Mitt i alla tankar kring livet som snart skulle förändras
            dök en fråga upp: varför finns det inget enkelt sätt
            för mammor att hitta nya vänner i samma livsfas?
          </AppText>

          <AppText className="aboutmommi-text">
            Att bli mamma är en av livets största förändringar.
            Samtidigt kan det vara svårt att hitta nya människor
            att dela den tiden med – någon att ta en promenad med,
            dricka kaffe med eller bara prata med när vardagen
            känns både fantastisk och överväldigande.
          </AppText>

          <AppText className="aboutmommi-text">
            Vi ville skapa en plats där det blir enklare.
          </AppText>

          <AppText className="aboutmommi-highlight">
            Därför byggde vi <strong>mommi</strong> – en app där
            mammor, eller som vi kallar er, <em>mommis</em>,
            kan mötas, hitta varandra och skapa nya vänskaper.
          </AppText>

          <AppText className="aboutmommi-text">
            Vi hoppas att du gillar vår app!
            Hör gärna av dig om du har frågor,
            feedback eller funderingar.
          </AppText>

          {/* SIGNATURE */}
          <div className="aboutmommi-signature-area">

            <AppText className="aboutmommi-sign-text">
              Kram
            </AppText>

            <div className="aboutmommi-signatures">
              <img src={Signatur1} className="aboutmommi-signature-img" />
              <img src={Signatur2} className="aboutmommi-signature-img" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutMommi;