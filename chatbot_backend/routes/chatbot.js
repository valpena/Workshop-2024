// routes/chatbot.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const axios = require('axios');

// Route protégée pour interagir avec le chatbot
router.post('/', auth, async (req, res) => {
  const { message } = req.body;

  try {
    // Remplacez l'URL par celle de votre API de chatbot
    const response = await axios.post('https://api.votre-chatbot.com/message', {
      message,
      userId: req.user.id, // Utiliser l'ID de l'utilisateur authentifié
    });

    res.json(response.data);
  } catch (error) {
    console.error('Erreur du chatbot:', error.message);
    res.status(500).send('Erreur du chatbot');
  }
});

module.exports = router;
