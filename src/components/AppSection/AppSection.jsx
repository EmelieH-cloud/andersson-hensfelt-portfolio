import './appsection.css'

import JoinMommiSection from './AppSectionComponents/JoinMommiSection'
import MommiHeroSection from './AppSectionComponents/MommiHeroSection'
import AppFeaturesSection from './AppSectionComponents/AppFeaturesSection'

const AppSection = () => {

  return (
    <section className="app-section">

      <MommiHeroSection />

      <AppFeaturesSection />

      <JoinMommiSection />

    </section>
  )
}

export default AppSection