import "./securityadvice.css";
import AppText from "../Font/AppText";

function SecurityAdvice() {

  return (

    <section className="security-page">

      <div className="security-container">

        <AppText as="h1" weight={600} className="security-title">
          Säkerhetsråd
        </AppText>


        <AppText className="security-text">
          Att lära känna andra mammor och skapa nya kontakter för både dig och ditt barn kan vara roligt och värdefullt. Samtidigt är det viktigt att alltid sätta din och ditt barns säkerhet först – både online och när ni träffas i verkligheten. Var uppmärksam och försiktig i dina kontakter.
        </AppText>



        {/* APP USAGE */}

        <AppText as="h2" weight={600} className="security-subtitle">
          När du använder appen
        </AppText>

        <ul className="security-list">

          <li>
            <strong>Skicka aldrig pengar eller ekonomisk information</strong> till någon du lärt känna via appen. Dela inte bankuppgifter eller annan finansiell information.
          </li>

          <li>
            <strong>Skydda din och ditt barns personliga information.</strong> Undvik att dela adress, förskola/skola, dagliga rutiner eller annan känslig information med personer du inte känner väl.
          </li>

          <li>
            <strong>Var försiktig med bilder på barn.</strong> Tänk igenom vilken information som syns i bakgrunden och undvik att dela detaljer som kan identifiera plats eller rutiner.
          </li>

          <li>
            <strong>Håll konversationen i appen</strong> tills du känner dig trygg. Det är säkrare än att snabbt flytta kontakten till sms eller andra plattformar.
          </li>

          <li>
            <strong>Var uppmärksam på varningssignaler.</strong> Undvik personer som ber om pengar, ger motsägelsefull information eller pressar dig på olika sätt.
          </li>

        </ul>



        {/* REAL LIFE */}

        <AppText as="h2" weight={600} className="security-subtitle">
          När ni träffas i verkligheten
        </AppText>

        <ul className="security-list">

          <li>
            <strong>Stressa inte.</strong> Ta tid på dig att lära känna personen innan ni bestämmer att ses.
          </li>

          <li>
            <strong>Träffas första gången på en offentlig och barnvänlig plats om du träffas med barn</strong>, till exempel ett café, lekplats eller annat öppet område med människor i närheten.
          </li>

          <li>
            <strong>Berätta gärna för någon</strong> var ni ska vara och hur länge.
          </li>

          <li>
            <strong>Avsluta träffen om något känns fel.</strong> Lita på din magkänsla – din och ditt barns trygghet går alltid först.
          </li>

        </ul>



        {/* REPORT */}

        <AppText className="security-text security-report">

          Om du upplever att en annan användare beter sig olämpligt, inom eller utanför appen, uppmanar vi dig att rapportera personen eller innehållet via appens rapporteringsfunktion.

          Vi tar alla sådana ärenden på allvar och arbetar för att skapa en trygg och respektfull miljö för alla mammor och barn i mommi.

        </AppText>

      </div>

    </section>

  );

}

export default SecurityAdvice;