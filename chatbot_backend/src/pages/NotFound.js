import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Optionnel pour les styles

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h2>404 - Page non trouvée</h2>
      <p>
        Retourner à la <Link to="/">page d'accueil</Link>.
      </p>
    </div>
  );
};

export default NotFound;
