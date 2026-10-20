import "./guide.css";

import { useTranslation } from "react-i18next";

import PageHeader from "../../shared/typography/PageHeader/PageHeader";

import MommiHeroVideoSection from "../../homepage/AppSection/AppSectionComponents/MommiHeroVideoSection";
import MommiGruppVideoSection from "../../homepage/AppSection/AppSectionComponents/MommiGruppVideoSection";
import MommiventVideoSection from "../../homepage/AppSection/AppSectionComponents/MommiVentVideoSection";

import GOOGLE from "../../../assets/appStore/googlebtn.png";
import IOS from "../../../assets/appStore/appstore.svg";

import mommivent_header from "../../../assets/mommi/mommivent-lg.png";
import mommigroup_header from "../../../assets/mommi/mommigroup-lg.png";
import mommisok_header from "../../../assets/mommi/mommisok-lg.png";

function Guide() {

  const { t } = useTranslation("general");

  return (

    <section className="guide-section">

      <div className="guide-container">

        {/* HEADER */}

        <div className="guide-header">

          <PageHeader
            className="guide-page-header page-header--nested"
            label="MOMMI GUIDE"
            title={t("guide.title")}
            subtitle={t("guide.intro")}
          />

          {/* DOWNLOAD BUTTONS */}

          <div className="guide-download-buttons">

            <a
              href="https://play.google.com/store/apps/details?id=com.anderssonhensfelt.mommi1"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-store-link"
            >

              <img
                src={GOOGLE}
                alt="Google Play"
                className="guide-store-btn"
              />

            </a>

            <a
              href="https://apps.apple.com/us/app/mommi/id6760843244"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-store-link"
            >

              <img
                src={IOS}
                alt="App Store"
                className="guide-store-btn"
              />

            </a>

          </div>

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
