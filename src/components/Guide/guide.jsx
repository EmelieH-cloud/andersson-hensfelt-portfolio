import "./guide.css";
import AppText from "../Font/AppText";
import MommiHeroVideoSection from "../AppSection/AppSectionComponents/MommiHeroVideoSection";
import MommiGruppVideoSection from "../AppSection/AppSectionComponents/MommiGruppVideoSection";
import MommiventVideoSection from "../AppSection/AppSectionComponents/MommiVentVideoSection";

import mommivent_header from "../../assets/mommi/mommivent-lg.png";
import mommigroup_header from "../../assets/mommi/mommigroup-lg.png";
import mommisok_header from "../../assets/mommi/mommisok-lg.png";

function Guide() {
  return (
    <section className="guide-section">
      <div className="guide-container">

        {/* HEADER */}
        <div className="guide-header">
          <AppText as="h1" className="guide-title">
            Upptäck mommi
          </AppText>

          <AppText className="guide-intro">
          Med våra funktioner mommiSök, mommiTräff och mommiGrupp har vi skapat allt du behöver för att träffa och komma i kontakt med andra mommis – på det sätt som passar dig.
          </AppText>
        </div>

        <div className="guide-videos">

          {/* 1 */}
          <div className="guide-video-card">
            <img
              src={mommisok_header}
              alt="mommiSök"
              className="guide-video-header-img"
            />



            <div className="guide-video-embed">
              <MommiHeroVideoSection />
            </div>
          </div>

          {/* 2 🔥 FIXAD */}
          <div className="guide-video-card guide-video-card--vent">
            <img
              src={mommivent_header}
              alt="mommiTräff"
              className="guide-video-header-img"
            />

            <div className="guide-video-embed">
              <MommiventVideoSection />
            </div>
          </div>

          {/* 3 */}
          <div className="guide-video-card">
            <img
              src={mommigroup_header}
              alt="mommiGrupp"
              className="guide-video-header-img"
            />

            <div className="guide-video-embed">
              <MommiGruppVideoSection />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Guide;