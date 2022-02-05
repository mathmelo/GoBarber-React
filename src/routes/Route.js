import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import store from '~/store';

export default function PrivateWrapper() {
  const { signed } = store.getState().auth;

  return signed ? <Outlet /> : <Navigate to="login" />;
}
