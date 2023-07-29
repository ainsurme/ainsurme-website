import React from 'react';
// import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div class="ignitor__footer" id="contact">
    <div class="ignitor__footer-links">
      <div class="ignitor__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
      </div>
      <div class="ignitor__footer-links_div">
        <h4>Resources</h4>
        <p>Careers</p>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div class="ignitor__footer-links_div">
        <h4>Contact Us</h4>
        <p><span>Email: </span><span><a href="mailto:contact.us@ainsurme.com">contact.us@ainsurme.com</a></span></p>
      </div>
    </div>
      
    <div class="ignitor__footer-copyright">
      <p>© 2023 AInsurMe.com. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;