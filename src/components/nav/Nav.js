// imports
import React from 'react';
import { Link } from 'react-router-dom';

// components
const Nav = () => (
  <nav className="navBar">
    <h1 className="navTitle">
      <Link to="/" className="navLinkTitle">
        Math Magicians
      </Link>
    </h1>
    <ul className="navMenu">
      <li className="navItem">
        <Link to="/" className="navLink">
          Home
        </Link>
      </li>
      <li className="navItem">
        <Link to="/calculator" className="navLink">
          Calculator
        </Link>
      </li>
      <li className="navItem">
        <Link to="/quote" className="navLink borderless">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
