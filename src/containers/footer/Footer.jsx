import React from 'react';
// import gpt3Logo from '../../assets/logo.svg';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

const Footer = () => (
  <div class="ignitor__footer" id="contact">
    <div class="ignitor__footer-links">
      <div class="ignitor__footer-links_div">
        <h4>Social Media</h4>
        <a href="https://www.linkedin.com/company/ainsurme/"><p>LinkedIn <FontAwesomeIcon icon={faLinkedinIn}/> </p></a>
      </div>
      <div class="ignitor__footer-links_div">
        <h4>Resources</h4>
        <p>Careers</p>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div class="ignitor__footer-links_div">
        <h4>Contact Us</h4>
        <p><span>Email: </span></p>
        <p><span><a href="mailto:nick.q.cheng@ainsurme.com">nick.q.cheng@ainsurme.com</a></span></p>
        <p><span><a href="mailto:donovan.hou@ainsurme.com">donovan.hou@ainsurme.com</a></span></p>
      </div>
    </div>
      
    <div class="ignitor__footer-copyright">
      <p>© 2023 AInsurMe.com. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;