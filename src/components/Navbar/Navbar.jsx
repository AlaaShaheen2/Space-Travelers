import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import saturn from '../../assets/saturn.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-and-text">
        <img src={saturn} alt="saturn logo" />
        <p>
          <NavLink
            to="/"
            className="logo-text"
          >
            Space Travelers&apos; Hub
          </NavLink>
        </p>
      </div>
      <ul className="links-list">
        <li>
          <NavLink
            to="/"
            className="link"
          >
            ROCKETS
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/missions"
            className="link"
          >
            MISSIONS
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className="link"
            id="my-profile"
          >
            MY PROFILE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
