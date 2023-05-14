import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">AInsurMe.com</a></p>
          <p><a href="#wgpt3">Who we are</a></p>
          <p><a href="#features">Products</a></p>
          <p><a href="#blog">Blog</a></p>
          <p><a href="#possibility">Team</a></p>
          <p><a href="#possibility">Contact</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <form action="https://ignitor.ainsurme.com/" method="get">
            <button type="submit" value="">Try IGNITOR</button>
        </form>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#wgpt3">AInsurMe.com</a></p>
            <p><a href="#home">Home</a></p>
            <p><a href="#features">Products</a></p>
            <p><a href="#blog">Blog</a></p>
            <p><a href="#possibility">Team</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
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