import React from 'react';
// import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="ignitor__footer section__padding" id="footer">
    <div className="ignitor__footer-heading">
      <h1 className="gradient__text">Do you want to have an early taste before others?</h1>
    </div>

    <div className="ignitor__footer-btn">
      <a href="#home"><p>Request Early Access</p></a>
    </div>

    <div className="ignitor__footer-links">
      <div className="ignitor__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
      </div>
      <div className="ignitor__footer-links_div">
        <h4>Resources</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="ignitor__footer-links_div">
        <h4>AInsurMe.com</h4>
        <p>Email: contact.us@ainsurme.com</p>
        <p>Address: company address, US</p>

      </div>
    </div>

    <div className="ignitor__footer-copyright">
      <p>© 2023 AInsurMe.com. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;