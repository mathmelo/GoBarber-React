import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateWrapper() {
  const signed = true;

  return signed ? <Outlet /> : <Navigate to="login" />;
}
