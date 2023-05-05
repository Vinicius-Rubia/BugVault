import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes: React.FC = () => {
  const login = true;

  return login ? <Outlet /> : <Navigate to="/" />;
}
