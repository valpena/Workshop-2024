// src/Header.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Optionnel pour les styles

const Header = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Bascule l'état du menu
  };

  return (
    <header>
      <h1>Mon Médecin de Poche</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? 'Fermer' : 'Menu'}
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        <Link to="/">Accueil</Link>
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/chat">Chat</Link>
            <Link to="/profile">Profil</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
