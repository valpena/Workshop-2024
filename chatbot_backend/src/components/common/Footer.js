import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="site-footer">
      <p>&copy; WorkShop 2024 | Groupe 29  {location.pathname !== '/privacy' && (
        <a href="/privacy" className="footer-link">| Politique de confidentialité</a>
      )}
      </p>
      
    </footer>
  );
};

export default Footer;
