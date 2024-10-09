import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ChatBot from './components/chat/ChatBot';
import Profil from './components/profil/Profil';
import Home from './pages/Home'; 
import NotFound from './pages/NotFound'; 
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatBot />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profil />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} /> {/* Route de fallback */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
