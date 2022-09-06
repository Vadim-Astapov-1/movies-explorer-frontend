import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ loggedIn, children }) {
  return loggedIn === false ? <Navigate to='/' /> : children;
}

export default ProtectedRoute;
