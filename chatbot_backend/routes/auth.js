// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Inscription
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'Utilisateur déjà existant' });
    }

    // Créer un nouvel utilisateur
    user = new User({ username, password });

    // Hacher le mot de passe
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Enregistrer l'utilisateur dans la base de données
    await user.save();

    // Créer le payload pour le JWT
    const payload = { user: { id: user.id } };

    // Signer le JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }, // Token valide 1 heure
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error('Erreur lors de l\'inscription:', err.message);
    res.status(500).send('Erreur serveur');
  }
});

// Connexion
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Trouver l'utilisateur par nom d'utilisateur
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Utilisateur non trouvé' });
    }

    // Comparer le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Mot de passe incorrect' });
    }

    // Créer le payload pour le JWT
    const payload = { user: { id: user.id } };

    // Signer le JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error('Erreur lors de la connexion:', err.message);
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;
