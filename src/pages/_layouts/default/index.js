import React from 'react';
import { Outlet } from 'react-router-dom';

import { Wrapper } from './styles';

export default function DefaultLayout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
