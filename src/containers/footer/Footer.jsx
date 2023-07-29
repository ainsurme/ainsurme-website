import React from 'react';
// import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div class="ignitor__footer" id="contact">
    <div class="ignitor__footer-links">
      <div class="ignitor__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
      </div>
      <div class="ignitor__footer-links_div">
        <h4>Resources</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div class="ignitor__footer-links_div">
        <h4>AInsurMe.com</h4>
        <p>Email: contact.us@ainsurme.com</p>
        <p>Address: company address, US</p>
      </div>
    </div>
      
    <div class="ignitor__footer-copyright">
      <p>© 2023 AInsurMe.com. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;