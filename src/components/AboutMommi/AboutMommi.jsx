import "./aboutmommi.css";
import AppText from "../Font/AppText";
import CircleDecor from "../CircleDecor/CircleDecor";
import Signatur1 from "../../assets/founders/signatur1.png";
import Signatur2 from "../../assets/founders/signatur2.png";

function AboutMommi() {
  return (
    <section className="aboutmommi-page">

      {/* 🎨 BAKGRUNDSCIRKLAR */}

      <CircleDecor
        size={500}
        top="-100px"
        left="-120px"
         opacity={0.35}
        tone="light"
        animation="drift"
        speed={40}
      />

       <CircleDecor
        size={400}
        top="150px"
        left="-120px"
        opacity={0.25}
        tone="light"
        animation="drift"
        speed={35}
      />

  

      <div className="aboutmommi-container">

        <AppText as="h1" weight={600} className="aboutmommi-title">
          Om mommi
        </AppText>

        <AppText className="aboutmommi-intro">
          Hej och välkommen till vår app!
        </AppText>

        <AppText className="aboutmommi-text">
          Grundarna till <strong>mommi</strong> är vi – Emelie och Alinia.
          Vi skapade appen med en enkel tanke i grunden:
          att det ska vara lättare för mammor att hitta varandra.
        </AppText>

        <AppText className="aboutmommi-text">
          Idén började ta form när Alinia var gravid.
          Mitt i alla tankar kring livet som snart skulle förändras
          dök en fråga upp: varför finns det inget enkelt sätt
          för mammor att hitta nya vänner i samma livsfas?
        </AppText>

        <AppText className="aboutmommi-text">
          Att bli mamma är en av livets största förändringar.
          Samtidigt kan det vara svårt att hitta nya människor
          att dela den tiden med – någon att ta en promenad med,
          dricka kaffe med eller bara prata med när vardagen
          känns både fantastisk och överväldigande.
        </AppText>

        <AppText className="aboutmommi-text">
          Vi ville skapa en plats där det blir enklare.
        </AppText>

        <AppText className="aboutmommi-highlight">
          Därför byggde vi <strong>mommi</strong> – en app där
          mammor, eller som vi kallar er, <em>mommis</em>,
          kan mötas, hitta varandra och skapa nya vänskaper.
        </AppText>

        <AppText className="aboutmommi-text">
          Oavsett om du är gravid, nybliven mommi
          eller har barn som blivit lite större.
        </AppText>

        <AppText className="aboutmommi-text">
          <strong>mommi</strong> är till för mammor som vill ses och
          umgås med varandra – både med och utan barn.
        </AppText>

        <AppText className="aboutmommi-text">
          När vi skapade <strong>mommi</strong> hade vi med oss att alla
          är olika och vill träffas på olika sätt.
          Vissa föredrar att träffa en person i taget,
          medan andra hellre ses i grupp.
        </AppText>

        {/* FEATURE 1 */}
        <div className="aboutmommi-feature">
          <AppText as="h3" weight={600}>
            mommiSök
          </AppText>
          <AppText>
            Här kan du hitta andra mommis utifrån de filter
            du själv väljer – perfekt om du vill träffas
            en och en för playdates, barnvagnspromenader
            eller kanske en barnfri kväll.
          </AppText>
        </div>

        {/* FEATURE 2 */}
        <div className="aboutmommi-feature">
          <AppText as="h3" weight={600}>
            mommiTräff
          </AppText>
          <AppText>
            Delta i eller skapa aktiviteter tillsammans
            med andra mommis. Det kan vara allt från
            babydans och gravidyoga till picknick
            i parken eller en after work.
          </AppText>
        </div>

        {/* FEATURE 3 */}
        <div className="aboutmommi-feature">
          <AppText as="h3" weight={600}>
            mommiGrupper
          </AppText>
          <AppText>
            Små communitys där du kan diskutera,
            ställa frågor eller hitta mommis
            som delar något specifikt med dig.
          </AppText>
        </div>

        <AppText className="aboutmommi-quote">
          För oss handlar <strong>mommi</strong> i grunden om något enkelt:
          att göra det lättare för mammor att hitta varandra
          och skapa vänskaper som följer med långt bortom småbarnsåren.
        </AppText>

        <AppText className="aboutmommi-text">
          Vi hoppas att du gillar vår app!
          Hör gärna av dig om du har frågor,
          feedback eller funderingar.
        </AppText>

        {/* SIGNATURE */}
        <div className="aboutmommi-signature-area">

          <AppText className="aboutmommi-sign-text">
            Kram
          </AppText>

          <div className="aboutmommi-signatures">
            <img
              src={Signatur1}
              alt="Emelie signatur"
              className="aboutmommi-signature-img"
            />
            <img
              src={Signatur2}
              alt="Alinia signatur"
              className="aboutmommi-signature-img"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutMommi;