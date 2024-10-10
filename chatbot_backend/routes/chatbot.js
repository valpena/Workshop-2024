// routes/chatbot.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const OpenAI = require('openai');

// Utilisez les variables d'environnement pour la clé API
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, // Définissez la clé API ici
});

// Définir le prémessage (le même à chaque requête)
const preMessage = "Vous êtes un assistant virtuel spécialisé dans la santé. Répondez aux questions des utilisateurs en fournissant des informations utiles et des recommandations.";

// Route protégée pour interagir avec le chatbot (via ChatGPT)
router.post('/', auth, async (req, res) => {
  const { message } = req.body;

  try {
    // Appel à l'API OpenAI ChatGPT
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Ou 'gpt-4' selon votre besoin
      messages: [
        { role: 'system', content: preMessage }, // Ajoutez le prémessage ici
        { role: 'user', content: message },      // Le message que l'utilisateur envoie
      ],
      max_tokens: 150, // Le nombre maximum de tokens dans la réponse
      temperature: 0.7, // La créativité des réponses (0 = plus strict, 1 = plus créatif)
    });

    // Extraire la réponse de l'IA
    let response = completion.choices[0].message.content;

    // Vérifier si le message contient le mot "docteur"
    if (message.toLowerCase().includes('docteur')) {
      response += " je vous recommande le site web https://www.doctolib.fr/ pour trouver un médecin dans votre secteur";
    }

    // Envoyer la réponse au client
    res.json({ response });

  } catch (error) {
    console.error('Erreur du chatbot:', error.response ? error.response.data : error.message);
    res.status(500).send('Erreur du chatbot');
  }
});

module.exports = router;