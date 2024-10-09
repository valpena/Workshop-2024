import React from 'react';
import ReactDOM from 'react-dom/client'; // Vérifie que tu as importé createRoot depuis react-dom/client
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Récupère le conteneur root de ton HTML
const container = document.getElementById('root');

// Crée une instance du root
const root = ReactDOM.createRoot(container);

// Rends ton application avec React.StrictMode et le Router
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
