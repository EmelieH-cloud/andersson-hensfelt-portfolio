import './appsection.css'

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

      <AppFeaturesIntro />
      <AppFeaturesSection />

      {/* 🔥 NY WRAPPER */}
      <div className="video-sections-wrapper">
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