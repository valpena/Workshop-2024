import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) { //mettre !login quand les modif sont finis
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
