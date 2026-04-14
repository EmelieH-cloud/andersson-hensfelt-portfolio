import './appsection.css'

import JoinMommiSection from './AppSectionComponents/JoinMommiSection'
import MommiHeroSection from './AppSectionComponents/MommiHeroSection'
import AppFeaturesSection from './AppSectionComponents/AppFeaturesSection'
import CommonQuestionsSection from './AppSectionComponents/CommonQuestionsSection'
import MommiHeroVideoSection from './AppSectionComponents/MommiHeroVideoSection'

const AppSection = () => {

  return (
    <section className="app-section">

      <MommiHeroSection />
      <MommiHeroVideoSection />
      <AppFeaturesSection />
      <CommonQuestionsSection />

      <JoinMommiSection />

    </section>
  )
}

export default AppSection