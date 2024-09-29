import React from 'react';
import { MdEmail } from "react-icons/md";
import './footerstyle.css'; 
import { HiMiniBuildingOffice } from "react-icons/hi2";

function Footer() {
  return (
    <footer className="section bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div>
      

  
           
               <p className='company-name-p'>Andersson & Hensfelt Handelsbolag </p>
  
                  <h6 className="footer-heading text-uppercase ">Contact Us</h6>
              <p className="contact-info mt-3"><MdEmail className='mail-icon'/> info@anderssonhensfelt.se</p>
              <p className='org-nbr'><HiMiniBuildingOffice className='org-icon'/>Org. number: 969801-6434</p>
            </div>
          </div>
        </div>  
      </div>
      

    </footer>
  );
}

export default Footer;
