import i18n from "i18next";
import { initReactI18next }
from "react-i18next";
import svNavbar from "./sv/navbar.json";
import enNavbar from "./en/navbar.json";
import svIntegrity from "./sv/integrity.json";
import enIntegrity from "./en/integrity.json";
import svTerms from "./sv/terms.json";
import enTerms from "./en/terms.json";
import svGeneral from "./sv/general.json";
import enGeneral from "./en/general.json";
import svPressroom from "./sv/pressroom.json";
import enPressroom from "./en/pressroom.json";
import svCollabs from "./sv/collabs.json";
import enCollabs from "./en/collabs.json";
import svSecurity from "./sv/security.json"
import enSecurity from "./en/security.json"

i18n
  .use(initReactI18next)
  .init({

    resources: {

      sv: {

        navbar: svNavbar,
        integrity: svIntegrity,
        terms: svTerms,
        general: svGeneral,
        pressroom: svPressroom,
        collabs: svCollabs,
        security: svSecurity
      },

      en: {

        navbar: enNavbar,
     integrity: enIntegrity,
        terms: enTerms,
        general: enGeneral,
        pressroom: enPressroom,
        collabs: enCollabs,
        security: enSecurity

      },

    },

    lng:
      localStorage.getItem("lang")
      || "sv",

    fallbackLng: "sv",

    interpolation: {
      escapeValue: false,
    },

  });

export default i18n;