import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    const url = '/auth/register';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Inscription réussie');
        console.log('Token:', data.token);
        // Stockage du token dans le localStorage
        localStorage.setItem('token', data.token);
        // Rediriger vers la page de profil ou une autre page
        navigate('/profile');
      } else {
        alert(data.msg || 'Une erreur est survenue');
      }
    } catch (err) {
      console.error('Erreur lors de la requête:', err);
      alert('Erreur serveur');
    }
  };

  return (
    <div className="container">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
      <div className="switch">
        <p>
          Déjà inscrit ? <a href="/login">Se connecter</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
