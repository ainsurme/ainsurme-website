import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/ainsurme_logo.png';
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
          <p><a href="#products">Products</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#team">Team</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      <div className="ignitor__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ignitor__navbar-menu_container scale-up-center">
          <div className="ignitor__navbar-menu_container-links">
            <p><a href="#home">AInsurMe.com</a></p>
            <p><a href="#products">Products</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#team">Team</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;