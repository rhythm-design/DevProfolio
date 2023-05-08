// import React from 'react';
// import Headroom from 'react-headroom';
// import "./Navbar.scss"

// const Navbar = () => {
//     return (
//         <Headroom>
//             <header className="navbar-header">
//               <label class="logo"> Rhythm </label>
//                 <ul className="navbar-list">
//                     <li class="navbar-items"><a href="#">Contact Me</a></li>
//                     <li class="navbar-items"><a href="#">Achievements</a></li>
//                     <li class="navbar-items"><a href="#">Proficiency</a></li>
//                     <li class="navbar-items"><a href="#">Project</a></li>
//                     <li class="navbar-items"><a href="#">Skills</a></li>
//                     <li class="navbar-items"><a href="#">Introduction</a></li>  
//                 </ul>
//             </header>

//         </Headroom>
//     );
// }

// export default Navbar;

import React, { useState } from 'react';
import Headroom from 'react-headroom';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Headroom>
      <header className="navbar-header">
        <label className="logo"> &lt;Rhythm&gt;</label>
        <div
          className={`navbar-toggle-icon ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        ></div>
        <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-items">
            <a href="#">Skills</a>
          </li>
          <li className="navbar-items">
            <a href="#">Projects</a>
          </li>
          <li className="navbar-items">
            <a href="#">Proficiency</a>
          </li>
          <li className="navbar-items">
            <a href="#">Achievements</a>
          </li>
          <li className="navbar-items">
            <a href="#">Contact Me</a>
          </li>
          {/* <li className="navbar-items">
            <a href="#">Introduction</a>
          </li> */}
        </ul>
      </header>
    </Headroom>
  );
};

export default Navbar;

