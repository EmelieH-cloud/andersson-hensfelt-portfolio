import "./footerstyle.css";

import { useTranslation } from "react-i18next";

import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";

import GOOGLE from "../../assets/appStore/googlebtn.png";
import IOS from "../../assets/appStore/appstore.svg";
import Logo from "../../assets/mommi/mommi-cart.png";

import AppText from "../Font/AppText";
import FooterColumn from "./FooterComponents/FooterColumn";

function Footer() {

  const { t } = useTranslation("general");

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
            {t("footer.description")}
          </AppText>

        </FooterColumn>

        {/* COLUMN 2 */}

        <FooterColumn title={t("footer.securityTitle")}>

          <div className="footer-links">

            <Link
              to="/integrity"
              className="footer-link"
            >

              <AppText>
                {t("footer.integrity")}
              </AppText>

            </Link>

            <Link
              to="/terms"
              className="footer-link"
            >

              <AppText>
                {t("footer.terms")}
              </AppText>

            </Link>

            <Link
              to="/safety"
              className="footer-link"
            >

              <AppText>
                {t("footer.safety")}
              </AppText>

            </Link>

          </div>

        </FooterColumn>

        {/* COLUMN 3 */}

        <FooterColumn title={t("footer.pages")}>

          <div className="footer-links">

            <Link
              to="/about-mommi"
              className="footer-link"
            >

              <AppText>
                {t("footer.about")}
              </AppText>

            </Link>

            <Link
              to="/pressroom"
              className="footer-link"
            >

              <AppText>
                {t("footer.pressroom")}
              </AppText>

            </Link>

            <Link
              to="/apps"
              className="footer-link"
            >

              <AppText>
                {t("footer.otherApps")}
              </AppText>

            </Link>

          </div>

        </FooterColumn>

        {/* COLUMN 4 */}

        <FooterColumn title={t("footer.contact")}>

          <AppText className="footer-contact">

            <MdEmail className="footer-icon" />

            info@anderssonhensfelt.se

          </AppText>

        </FooterColumn>

        {/* COLUMN 5 */}

        <FooterColumn title={t("footer.download")}>

          <div className="footer-download">

            <a
              href="https://play.google.com/store/apps/details?id=com.anderssonhensfelt.mommi1"
              target="_blank"
              rel="noopener noreferrer"
            >

              <img
                src={GOOGLE}
                alt="Google Play"
                className="store-btn"
              />

            </a>

            <a
              href="https://apps.apple.com/us/app/mommi/id6760843244"
              target="_blank"
              rel="noopener noreferrer"
            >

              <img
                src={IOS}
                alt="App Store"
                className="store-btn"
              />

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