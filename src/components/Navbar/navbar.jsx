import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const logoSrc = variant === "light" ? LogoDark : LogoWhite;

  return (
    <Navbar
      expand="lg"
      className={`
        navbar-custom
        ${variant === "light" ? "navbar-light-mode" : ""}
        ${scrolled ? "navbar-scrolled" : ""}
      `}
    >

      <Container>

        <Navbar.Brand as={Link} to="/">
          <img src={logoSrc} alt="logo" className="logo-navbar" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto navlinks">

            <Nav.Link as={Link} to="/guide">
              <AppText as="span" weight={500}>
                Så funkar det
              </AppText>
            </Nav.Link>

            <Nav.Link as={Link} to="/about-mommi">
              <AppText as="span" weight={500}>
                Bakom mommi
              </AppText>
            </Nav.Link>

               <Nav.Link as={Link} to="/faq">
              <AppText as="span" weight={500}>
               Vanliga frågor
              </AppText>
            </Nav.Link>

            <Nav.Link as={Link} to="/apps">
              <AppText as="span" weight={500}>
                Andra appar
              </AppText>
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

NavBar.propTypes = {
  variant: PropTypes.oneOf(["dark", "light"]),
};

export default NavBar;