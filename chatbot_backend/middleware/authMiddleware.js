// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Récupérer le token depuis les en-têtes
  const token = req.header('x-auth-token');

  // Vérifier si aucun token n'est fourni
  if (!token) {
    return res.status(401).json({ msg: 'Pas de token, autorisation refusée' });
  }

  // Vérifier la validité du token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Ajouter l'utilisateur à la requête
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token invalide' });
  }
};
