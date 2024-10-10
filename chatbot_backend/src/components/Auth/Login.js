import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:5000/api/auth/login'; // Utiliser l'URL correcte
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
        alert('Connexion réussie');
        console.log('Token:', data.token);
        localStorage.setItem('token', data.token);
        navigate('/chat');
      } else {
        alert(data.msg || 'Une erreur est survenue');
      }
    } catch (err) {
      console.error('Erreur lors de la requête:', err);
      alert('Erreur serveur');
    }
  };

  return (
    <div className="auth-container">
      <h2>Se connecter</h2>
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
        <button type="submit">Se connecter</button>
      </form>
      <div className="switch">
        <p>
          Pas encore inscrit ? <Link to="/register">Créer un compte</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
