import "./aboutmommi.css";
import { useState } from "react";

import AppText from "../Font/AppText";

import Signatur1 from "../../assets/founders/alinia_sign.png";
import Signatur2 from "../../assets/founders/emelie_sign.png";
import founders from "../../assets/founders/founders.png";

function AboutMommi() {

  const [loaded, setLoaded] = useState(false);

  return (
    <section className="aboutmommi-section">

      <div className="aboutmommi-container">

        {/* 🔥 IMAGE */}
        <div className="aboutmommi-image-wrapper">
          <img
            src={founders}
            className={`aboutmommi-image ${loaded ? "loaded" : ""}`}
            onLoad={() => setLoaded(true)}
          />
        </div>

        {/* 🔥 TEXT */}
        <div className="aboutmommi-content">

          <AppText as="h1" weight={600} className="aboutmommi-title">
            Grundarna och utvecklarna bakom mommi
          </AppText>

          <AppText className="aboutmommi-intro">
            Hej och välkommen till hemsidan för vår app!
          </AppText>

          <AppText className="aboutmommi-text">
            Grundarna och utvecklarna bakom <strong>mommi</strong> är vi – Emelie och Alinia.
            Vi skapade appen med en enkel tanke:
            att det ska vara lättare för mammor att hitta varandra.
          </AppText>

          <AppText className="aboutmommi-text">
            Idén började när Alinia var gravid.
            Mitt i alla tankar kring livet som snart skulle förändras
            dök en fråga upp – varför finns det inget enkelt sätt
            att hitta andra i samma situation?
          </AppText>

          <AppText className="aboutmommi-text">
            Att bli mamma är fantastiskt – men det kan också kännas ensamt.
            Vi ville göra det enklare att hitta någon att dela det med.
          </AppText>

            <AppText className="aboutmommi-text">
                Därför skapade vi <strong>mommi</strong> – en plats där du kan hitta,
                prata med och träffa andra mommis.
              </AppText>

          <AppText className="aboutmommi-text">
            Vi hoppas att du gillar appen!
          </AppText>

          {/* SIGNATURE */}
          <div className="aboutmommi-signature-area">

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