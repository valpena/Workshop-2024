import React from 'react';
//import './Profil.css'; // les styles

const Profil = () => {
  // Exemple de données utilisateur
  const user = {
    username: 'JohnDoe',
    email: 'john@example.com',
    bio: 'Développeur React passionné.'
  };

  return (
    <div className="profile-container">
      <h2>Profil de {user.username}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
};

export default Profil;
