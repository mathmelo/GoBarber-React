import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Matheus Melo</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://uploads.commoninja.com/searchengine/wordpress/adorable-avatars.png"
              alt="Profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
