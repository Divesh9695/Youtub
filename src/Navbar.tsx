import React, { useState } from "react";
import {
  FaYoutube,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__logo">
          <FaYoutube color="red" size={32} />
          <h1>YouTube</h1>
        </div>

        <div className="navbar__search">
          <input type="text" placeholder="Search" className="navbar__input" />
          <button className="navbar__button">
            <FaSearch size={20} />
          </button>
        </div>

        <div className="navbar__menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <div className={`navbar__icons ${isOpen ? "navbar__icons--open" : ""}`}>
          <FaBell size={25} className="navbar__icon" />
          <FaUserCircle size={30} className="navbar__icon" />
        </div>

        <ul className="navbar-list">
          <li className="header"><Link to="/All">All</Link></li>
          <li className="header"><Link to="/live">Live</Link></li>
          <li className="header"><Link to="/react-tutorial">React Tutorial</Link></li>
          <li className="header"><Link to="/music">Music</Link></li>
          <li className="header"><Link to="/T-Series">T-Series</Link></li>
          <li className="header"><Link to="/Data-Structure">Data-Structure</Link></li>
          <li className="header"><Link to="/mixed">mixed</Link></li>
          <li className="header"><Link to="/Video">Video</Link></li>
          <li className="header"><Link to="/New-to-you">New-to-you</Link></li>
          <li className="header"><Link to="/mixed">mixed</Link></li>
          <li className="header"><Link to="/Video">Video</Link></li>
          <li className="header"><Link to="/New-to-you">New-to-you</Link></li>
          <li className="header"><Link to="/T-Series">T-Series</Link></li>
          <li className="header"><Link to="/Data-Structure">Data-Structure</Link></li>
 
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
