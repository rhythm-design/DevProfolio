import React, { useState } from 'react';
import Headroom from 'react-headroom';
import './Navbar.scss';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="headroom">
      <Headroom>
        <header className="navbar-header" id="portfolio-navbar">
          <label className="logo">&lt;Rhythm&gt;</label>
          <div className={`navbar-list ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li className="navbar-items" onClick={toggleMobileMenu}>
                <a href="#skills">Skills</a>
              </li>
              <li className="navbar-items" onClick={toggleMobileMenu}>
                <a href="#projects">Projects</a>
              </li>
              <li className="navbar-items" onClick={toggleMobileMenu}>
                <a href="#proficiency">Proficiency</a>
              </li>
              <li className="navbar-items" onClick={toggleMobileMenu}>
                <a href="#achievements">Achievements</a>
              </li>
              <li className="navbar-items" onClick={toggleMobileMenu}>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
          <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'toggled' : ''}`} onClick={toggleMobileMenu}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>
        </header>
      </Headroom>
    </div>
  );
};

export default Navbar;

