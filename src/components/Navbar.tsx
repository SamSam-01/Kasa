import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/assets/kasa_logo.png" alt="Logo Kasa" />
      </div>
      <div className="navbar__links">
        <NavLink to="/" className="navbar__link">Accueil</NavLink>
        <NavLink to="/about" className="navbar__link">A Propos</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
