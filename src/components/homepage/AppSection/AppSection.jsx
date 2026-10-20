import './appsection.css'
import CircleDecor from '../../shared/decorations/CircleDecor/CircleDecor'

import JoinMommiSection from './AppSectionComponents/JoinMommiSection'
import MommiHeroSection from './AppSectionComponents/MommiHeroSection'
import AppFeaturesSection from './AppSectionComponents/AppFeaturesSection'
import CommonQuestionsSection from './AppSectionComponents/CommonQuestionsSection'
import MommiHeroVideoSection from './AppSectionComponents/MommiHeroVideoSection'
import MommiventVideoSection from './AppSectionComponents/MommiVentVideoSection'
import MommiGruppVideoSection from './AppSectionComponents/MommiGruppVideoSection'
import AppFeaturesIntro from './AppSectionComponents/AppFeaturesIntro'

const AppSection = () => {
  return (
    <section className="app-section">

      <div className="app-features-showcase">
        <CircleDecor size="clamp(360px, 46vw, 680px)" top="-330px" left="-250px" tone="medium" transparency="high" zIndex={0} />
        <CircleDecor size="clamp(400px, 52vw, 760px)" top="-300px" right="-240px" tone="light" transparency="medium" zIndex={0} />
        <CircleDecor size="clamp(300px, 38vw, 560px)" bottom="-390px" left="calc(50% - 280px)" tone="medium" transparency="high" zIndex={0} />
        <AppFeaturesIntro />
        <AppFeaturesSection />
      </div>

      {/* 🔥 NY WRAPPER */}
      <div className="video-sections-wrapper">
        <CircleDecor size="clamp(340px, 42vw, 620px)" top="2%" left="-230px" tone="medium" transparency="medium" zIndex={0} />
        <CircleDecor size="clamp(300px, 38vw, 560px)" bottom="-120px" right="-220px" tone="dark" transparency="high" zIndex={0} />
        <MommiHeroVideoSection />
        <MommiventVideoSection />
        <MommiGruppVideoSection />
      </div>

      <MommiHeroSection />
      <CommonQuestionsSection />
      <JoinMommiSection />

    </section>
  )
}

export default AppSection
