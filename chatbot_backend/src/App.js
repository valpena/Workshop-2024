import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import Register from './Register';
import ChatBot from './ChatBot';
import Profil from './Profil';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<ChatBot />} />
        <Route path="/profile" element={<Profil />}/>
      </Routes>
    </div>
  );
}

export default App;
