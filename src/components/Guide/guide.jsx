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
            Hitta mammor nära dig, skapa och gå med i träffar och grupper —
            allt i en och samma app.
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

            <AppText className="guide-video-text">
              Du börjar med att skapa ditt konto och din profil i appen.
              Här fyller du i var du befinner dig i mammalivet, din ålder, vilken stad du bor i och vad du gärna vill hitta på med andra mommis.
              Du kan också lägga till om du har barn och deras åldrar, samt skriva en personlig bio.
              Din profil visas i mommiSök där andra mommis kan hitta dig och filtrera utifrån det du har fyllt i.
            </AppText>

            <AppText className="guide-video-text">
              När du hittar en mommi som du vill lära känna kan du skicka en mommiförfrågan med ett meddelande om vad som fångade ditt intresse.
              När hon svarar blir ni mommivänner och en chatt öppnas där ni kan fortsätta skriva och planera en träff!
            </AppText>

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

            <AppText className="guide-video-text">
              Vill du hitta på något tillsammans med andra mommis? Oavsett om du vill planera en afterwork utan barn,
              hitta sällskap till gravidyogan eller någon att ta en löprunda med – kan du enkelt skapa en mommiTräff.
              Träffen kan vara öppen för alla eller bara för dina mommivänner. Du kan även skapa återkommande träffar,
              perfekt om du har något du gör regelbundet och vill ha sällskap till.
            </AppText>

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

            <AppText className="guide-video-text">
              I mommiGrupp kan du skapa eller gå med i grupper utifrån det som känns relevant för dig.
              Det kan vara allt från mommis i samma stad till gemensamma intressen eller var ni befinner er i mammalivet.
              Perfekt för att dela erfarenheter och tips, eller bara för att hitta andra som är i samma situation som du.
            </AppText>

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