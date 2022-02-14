import React from 'react';
import { Outlet } from 'react-router-dom';

import { Wrapper, Content } from './styles';

export default function AuthLayout() {
  return (
    <Wrapper>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
}
