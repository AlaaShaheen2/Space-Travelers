import './Navbar.css';
import Img from '../../assets/logo.png';

const Navbar = () => (
  <header className="app-header">
    <div className="logo-container">
      <img src={Img} alt="logo" className="logo-pic" />
      <span className="app-title">Space Travelers Hub</span>
    </div>
    <nav className="navbar">
      <ul className="navbar-list">
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
