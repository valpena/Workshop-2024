import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Ici, tu pourrais ajouter la logique pour envoyer le message au backend ou à une API de chatbot
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
