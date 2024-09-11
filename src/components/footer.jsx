import React from 'react';
import './footerstyle.css'; // Se till att skapa och lägga till CSS här

function Footer() {
  return (
    <footer className="section bg-footer">
      <div className="container">
        <div className="row">
     
          <div className="col-lg-4">
            <div>
              <h6 className="footer-heading text-uppercase ">Contact Us</h6>
               <p>Andersson & Hensfelt Handelsbolag</p>
              <p className="contact-info">contact.andersson.hensfelt@gmail.com</p>
              <p>Org. number: 969801-6434</p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
