import React from 'react';
import AuthPage from './AuthPage';
import Register from './Register';
import ChatBot from './ChatBot';
import Profil from './Profil';

function App() {
  return (
    <div className="App">
      <AuthPage />
      <Register />
      <ChatBot />
      <Profil />
    </div>
  );
}

export default App;
