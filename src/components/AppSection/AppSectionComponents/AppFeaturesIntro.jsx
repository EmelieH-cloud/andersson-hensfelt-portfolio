import './appfeaturesintro.css'
import AppText from '../../Font/AppText'

const AppFeaturesIntro = () => {
  return (
    <section className="app-features-intro">

      <div className="app-features-intro-container">

        <span className="accent-line animate-line" />

        <AppText as="h1" weight={400} className="intro-heading animate-heading">
          Kom i kontakt med mommis på det sätt som passar dig bäst
        </AppText>

        <AppText weight={400} className="intro-paragraph animate-text">
          När vi skapade mommi hade vi med oss att alla är olika och vill träffas på olika sätt. 
          Vissa föredrar att träffa en person i taget, medan andra hellre ses i grupp. 
          Därför har vi skapat tre olika sätt för dig att komma i kontakt med och träffa andra mommis - mommiSök, mommiTräff och mommiGrupper.
        </AppText>

        <span className="accent-line bottom animate-line delay" />

      </div>

    </section>
  )
}

export default AppFeaturesIntro