import "./guide.css";
import { useState } from "react";
import AppText from "../Font/AppText";

import guideImg1 from "../../assets/mommi/phonepictures/mommirequest.png";
import guideImg2 from "../../assets/mommi/phonepictures/mommirequest2.png";

function Guide() {
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);

  return (
    <section className="guide-section">

      <div className="guide-container">

        {/* HEADER */}
        <div className="guide-header">
          <AppText as="h1" className="guide-title">
            Bli mommivänner
          </AppText>

          <AppText className="guide-intro">
            För att börja chatta behöver ni först bli mommivänner i mommi-appen. Såhär enkelt är det!
          </AppText>
        </div>

        {/* STEPS */}
        <div className="guide-steps">

          {/* STEP 1 */}
          <div className="guide-card">

            <AppText className="guide-step-title">
              1. Skicka en mommiförfrågan
            </AppText>

            <AppText className="guide-step-text">
              Hittar du någon mommi som verkar härlig?
              Skicka ett första meddelande om vad som väckte ditt intresse. 
            </AppText>

            <img
              src={guideImg1}
              className={`guide-image ${loaded1 ? "loaded" : ""}`}
              onLoad={() => setLoaded1(true)}
            />

          </div>

          {/* STEP 2 */}
          <div className="guide-card">

            <AppText className="guide-step-title">
              2. Få svar på din mommiförfrågan
            </AppText>

            <AppText className="guide-step-text">
              När du får ett svar tillbaka på din mommiförfrågan öppnas chatten –
              och ni kan börja prata och planera en träff.
            </AppText>

            <img
              src={guideImg2}
              className={`guide-image ${loaded2 ? "loaded" : ""}`}
              onLoad={() => setLoaded2(true)}
            />

          </div>

        </div>


      </div>

    </section>
  );
}

export default Guide;