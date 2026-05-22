import Nav from "react-bootstrap/Nav";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import "./languagetoggle.css";

function LanguageToggle() {

  const { i18n: translationInstance } =
    useTranslation();

  const currentLanguage =
    translationInstance.language;

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (

    <Nav.Item className="language-toggle-wrapper">

      <div className="language-toggle">

        {/* SLIDER */}
        <div
          className={`language-slider ${
            currentLanguage === "en"
              ? "right"
              : ""
          }`}
        />

        {/* SV */}
        <button
          className={`language-btn ${
            currentLanguage === "sv"
              ? "active"
              : ""
          }`}
          onClick={() => setLanguage("sv")}
        >
          SV
        </button>

        {/* EN */}
        <button
          className={`language-btn ${
            currentLanguage === "en"
              ? "active"
              : ""
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>

      </div>

    </Nav.Item>
  );
}

export default LanguageToggle;