// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Assure que le nom d'utilisateur est unique
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Ajoute des champs createdAt et updatedAt
});

module.exports = mongoose.model('User', UserSchema);
