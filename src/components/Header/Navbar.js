import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Img from '../../assets/logo.png';

const Navbar = () => (
  <header className="app-header">
    <div className="logo-container">
      <img src={Img} alt="logo" className="logo-pic" />
      <span className="app-title">Space Travelers&apos; Hub</span>
    </div>
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/"> Rockets </NavLink>
        </li>
        <li>
          <NavLink to="/missions"> Missions </NavLink>
        </li>
        <li>
          <NavLink to="/profile"> My Profle </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
