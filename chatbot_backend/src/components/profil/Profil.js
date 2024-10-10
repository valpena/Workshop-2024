import React from 'react';
import './Profil.css'; // les styles

const Profil = () => {
  // Exemple de données utilisateur
  const user = {
    email: 'john@example.com',
    firstName: 'John',
    postalCode: '75001',
  };

  return (
    <div className="profile-container">
      <h2>Profil de {user.firstName}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Prénom:</strong> {user.firstName}</p>
      <p><strong>Code Postal:</strong> {user.postalCode}</p>
    </div>
  );
};

export default Profil;
