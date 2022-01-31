import React from 'react';
import { Outlet } from 'react-router-dom';

import { Wrapper } from './styles';

export default function AuthLayout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
