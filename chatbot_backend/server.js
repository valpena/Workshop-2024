// server.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); // Importer path pour gérer les chemins

// Charger les variables d'environnement
dotenv.config();

const app = express();

// Connecter à la base de données
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Pour parser les JSON

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/chatbot', require('./routes/chatbot'));

// Servir les fichiers statiques à partir du dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route pour servir le fichier HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Définir le port
const PORT = process.env.PORT || 5000;

// Démarrer le serveur
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
