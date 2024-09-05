import React from 'react';
import './footerstyle.css'; // Se till att skapa och lägga till CSS här

function Footer() {
  return (
    <footer className="section bg-footer">
      <div className="container">
        <div className="row">
     



          <div className="col-lg-4">
            <div>
              <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>

              <p className="contact-info">contact.andersson.hensfelt@gmail.com</p>

            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="footer-alt mb-0 f-14">Andersson & Hensfelt Handelsbolag</p>
      </div>
    </footer>
  );
}

export default Footer;
