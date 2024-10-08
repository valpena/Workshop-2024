import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin ? '/auth/login' : '/auth/register';
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
        alert(isLogin ? 'Connexion réussie' : 'Inscription réussie');
        console.log('Token:', data.token);
        // Stockage du token dans le localStorage
        localStorage.setItem('token', data.token);
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
      <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
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
        <button type="submit">{isLogin ? 'Se connecter' : 'S\'inscrire'}</button>
      </form>
      <div className="switch">
        {isLogin ? (
          <p>
            Pas encore inscrit ? <a href="#" onClick={toggleForm}>Créer un compte</a>
          </p>
        ) : (
          <p>
            Déjà inscrit ? <a href="#" onClick={toggleForm}>Se connecter</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
