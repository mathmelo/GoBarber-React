import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '~/components/Header';
import { Wrapper } from './styles';

export default function DefaultLayout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}
