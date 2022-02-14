import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import PrivateWrapper from './Route';

export default function routes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
      <Route element={<PrivateWrapper />}>
        <Route element={<DefaultLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}
