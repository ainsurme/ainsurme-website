import React from 'react';
// import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href="#home"><p>Request Early Access</p></a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Resources</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>AInsurMe.com</h4>
        <p>Address: company address, US</p>

      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>© 2023 AInsurMe.com. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;