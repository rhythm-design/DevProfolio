import React, { useState } from 'react';
import Headroom from 'react-headroom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="headroom">
      <Headroom>
        <header className="navbar-header">
          <label className="logo"> &lt;Rhythm&gt;</label>
          {/* <div
            className="navbar-toggle-icon"
          ></div> */}
          <ul className="navbar-list">
            <li className="navbar-items">
              <a href="#skills">Skills</a>
            </li>
            <li className="navbar-items">
              <a href="#projects">Projects</a>
            </li>
            <li className="navbar-items">
              <a href="#proficiency">Proficiency</a>
            </li>
            <li className="navbar-items">
              <a href="#achievements">Achievements</a>
            </li>
            <li className="navbar-items">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </header>
      </Headroom>
    </div>
  );
};

export default Navbar;
