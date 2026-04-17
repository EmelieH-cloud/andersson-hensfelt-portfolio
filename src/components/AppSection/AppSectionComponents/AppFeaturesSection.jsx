import './appfeaturessection.css'
import MOMMIGROUP from '../../../assets/mommi/group.png'
import MOMMIVENT from '../../../assets/mommi/traff.png'
import MOMMISOK from '../../../assets/mommi/sok.png'

import AppText from '../../Font/AppText'

const AppFeaturesSection = () => {
  return (
    <section className="app-features">

      <div className="app-features-container fade-in">

        <div className="app-features-phones">

          <div className="feature-item">
            <img src={MOMMISOK} className="phone-image" />

            <div className="feature-card">
              <h3 className="feature-title">
                <span className="bullet" />
                Träffas en och en
              </h3>
              <AppText className="feature-desc" weight={400}>
                Hitta mommis utifrån de filter du själv väljer. Perfekt om du vill träffas en och en för playdates, barnvagnspromenader eller varför inte en barnfri kväll?
              </AppText>
            </div>
          </div>

          <div className="feature-item">
            <img src={MOMMIVENT} className="phone-image" />

            <div className="feature-card">
              <h3 className="feature-title">
                <span className="bullet" />
                Träffas flera
              </h3>
              <AppText className="feature-desc" weight={400}>
                Delta i eller skapa aktiviteter tillsammans med andra mommis. Det kan vara allt från babydans, gravidyoga, picknick i parken till en afterwork.
              </AppText>
            </div>
          </div>

          <div className="feature-item">
            <img src={MOMMIGROUP} className="phone-image" />

            <div className="feature-card">
              <h3 className="feature-title">
                <span className="bullet" />
                Gå med i grupper
              </h3>
              <AppText className="feature-desc" weight={400}>
                Gå med i eller skapa egna communitys där du kan diskutera, ställa frågor eller hitta mommis som delar något specifikt med dig.
              </AppText>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default AppFeaturesSection