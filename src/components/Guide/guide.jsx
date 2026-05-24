import "./guide.css";

import { useTranslation } from "react-i18next";

import AppText from "../Font/AppText";

import MommiHeroVideoSection from "../AppSection/AppSectionComponents/MommiHeroVideoSection";
import MommiGruppVideoSection from "../AppSection/AppSectionComponents/MommiHeroVideoSection";
import MommiventVideoSection from "../AppSection/AppSectionComponents/MommiVentVideoSection";

import mommivent_header from "../../assets/mommi/mommivent-lg.png";
import mommigroup_header from "../../assets/mommi/mommigroup-lg.png";
import mommisok_header from "../../assets/mommi/mommisok-lg.png";

function Guide() {

  const { t } = useTranslation("general");

  return (

    <section className="guide-section">

      <div className="guide-container">

        {/* HEADER */}

        <div className="guide-header">

          <span className="guide-tag">
            MOMMI GUIDE
          </span>

          <AppText as="h1" className="guide-title">
            {t("guide.title")}
          </AppText>

          <AppText className="guide-intro">

            {t("guide.intro")}

          </AppText>

        </div>

        {/* VIDEOS */}

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

          {/* 2 */}

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