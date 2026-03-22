import "./footerstyle.css";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import GOOGLE from "../../assets/appStore/googlebtn.png";
import IOS from "../../assets/appStore/appstore.svg";
import Logo from "../../assets/mommi/mommi-cart.png";

import AppText from "../Font/AppText";
import FooterColumn from "./FooterComponents/FooterColumn";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* COLUMN 1 */}

        <FooterColumn>

          <img
            src={Logo}
            alt="mommi"
            className="footer-logo"
          />

          <AppText className="footer-text">
            mommi - för mammor som vill träffa mammor.
          </AppText>

        </FooterColumn>


        {/* COLUMN 2 */}

        <FooterColumn title="Villkor och säkerhet">

          <div className="footer-links">

            <Link to="/integrity" className="footer-link">
              <AppText>Integritetspolicy</AppText>
            </Link>

            <Link to="/terms" className="footer-link">
  <AppText>Användarvillkor</AppText>
</Link>
 <Link to="/safety" className="footer-link">
  <AppText>Säkerhetsråd</AppText>
</Link>

          </div>

        </FooterColumn>


        {/* COLUMN 3 */}

        <FooterColumn title="Sidor">

          <div className="footer-links">

            <Link to="/about-mommi" className="footer-link">
              <AppText>Bakom mommi</AppText>
            </Link>

            <Link to="/support" className="footer-link">
              <AppText>Pressrum</AppText>
            </Link>

          </div>

        </FooterColumn>


        {/* COLUMN 4 */}

        <FooterColumn title="Kontakta oss">

          <AppText className="footer-contact">
            <MdEmail className="footer-icon"/>
            info@anderssonhensfelt@gmail.se
          </AppText>


        </FooterColumn>


        {/* COLUMN 5 */}

        <FooterColumn title="Ladda ner mommi">

          <div className="footer-download">

            <a
              href="https://play.google.com/store/apps/details?id=com.anderssonhensfelt.onemoredate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GOOGLE} alt="Google Play" className="store-btn"/>
            </a>

            <a
              href="https://apps.apple.com/us/app/one-more-date/id6651834743"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IOS} alt="App Store" className="store-btn"/>
            </a>

          </div>

        </FooterColumn>

      </div>


      <div className="footer-bottom">

        <AppText>
          © {new Date().getFullYear()} mommi
        </AppText>

      </div>

    </footer>

  );

}

export default Footer;