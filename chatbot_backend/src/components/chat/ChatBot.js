import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() !== '') {
      const token = localStorage.getItem('token'); // Récupérer le token

      if (!token) {
        alert("Vous devez être connecté pour utiliser le chatbot.");
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token // Ajoutez le token sans "Bearer"
          },
          body: JSON.stringify({ message: input })
        });

        const data = await response.json();
        if (response.ok) {
          setMessages([...messages, { text: input, sender: 'user' }, { text: data.response, sender: 'bot' }]);
          setInput('');
        } else {
          alert('Erreur lors de l\'envoi du message.');
        }
      } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur serveur');
      }
    }
  };

  return (
    <div className="chatbot-container">
      <h2>ChatBot</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender}>
            {msg.text}
          </p>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Écris un message..."
        />
        <button onClick={handleSend}>Envoyer</button>
      </div>
    </div>
  );
};

export default ChatBot;
