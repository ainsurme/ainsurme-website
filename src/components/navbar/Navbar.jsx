import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/ainsurme_logo.jpg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ignitor__navbar">
      <div className="ignitor__navbar-links">
        <div className="ignitor__navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="ignitor__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#features">Products</a></p>
          <p><a href="#possibility">Team</a></p>
          <p><a href="#footer">Contact</a></p>
        </div>
      </div>
      <div className="ignitor__navbar-sign">
        <form action="https://ignitor.ainsurme.com/" method="get">
            <button type="submit" value="">Try IGNITOR</button>
        </form>
      </div>
      <div className="ignitor__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ignitor__navbar-menu_container scale-up-center">
          <div className="ignitor__navbar-menu_container-links">
            <p><a href="#home">AInsurMe.com</a></p>
            <p><a href="#home">Home</a></p>
            <p><a href="#features">Products</a></p>
            <p><a href="#possibility">Team</a></p>
            <p><a href="#footer">Contact</a></p>
          </div>
          <div className="ignitor__navbar-menu_container-links-sign">
            <form action="https://ignitor.ainsurme.com/" method="get">
              <button type="submit" value="#home">Try IGNITOR</button>
            </form>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;