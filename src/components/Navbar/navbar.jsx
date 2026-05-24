import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

import LanguageToggle from "./LanguageToggle";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import LogoWhite from "../../assets/founders/signature-logo-white.png";
import LogoDark from "../../assets/founders/signature-logo.png";

import "./navbarstyle.css";

import { Link } from "react-router-dom";

import AppText from "../Font/AppText";

function NavBar({ variant = "dark" }) {

  const { t } = useTranslation("navbar");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const logoSrc =
    variant === "light"
      ? LogoDark
      : LogoWhite;

  return (

    <Navbar
      expand="lg"
      className={`
        navbar-custom
        ${variant === "light"
          ? "navbar-light-mode"
          : ""
        }
        ${scrolled
          ? "navbar-scrolled"
          : ""
        }
      `}
    >

      <Container>

        {/* LOGO */}

        <Navbar.Brand as={Link} to="/">

          <img
            src={logoSrc}
            alt="logo"
            className="logo-navbar"
          />

        </Navbar.Brand>

        {/* MOBILE TOGGLE */}

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
        />

        {/* NAV LINKS */}

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto navlinks">

            {/* GUIDE */}

            <Nav.Link as={Link} to="/guide">

              <AppText as="span" weight={500}>
                {t("guide")}
              </AppText>

            </Nav.Link>

            {/* ABOUT */}

            <Nav.Link as={Link} to="/about-mommi">

              <AppText as="span" weight={500}>
                {t("aboutMommi")}
              </AppText>

            </Nav.Link>

            {/* FAQ */}

            <Nav.Link as={Link} to="/faq">

              <AppText as="span" weight={500}>
                {t("faq")}
              </AppText>

            </Nav.Link>

            {/* APPS */}

                <Nav.Link as={Link} to="/pressroom">

              <AppText as="span" weight={500}>
                {t("pressroom")}
              </AppText>

            </Nav.Link>

            
                <Nav.Link as={Link} to="/collabs">

              <AppText as="span" weight={500}>
                {t("collabs")}
              </AppText>

            </Nav.Link>


            {/* LANGUAGE TOGGLE */}

            <LanguageToggle />

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

NavBar.propTypes = {
  variant: PropTypes.oneOf([
    "dark",
    "light",
  ]),
};

export default NavBar;