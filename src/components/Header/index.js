import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';

import { useSelector } from 'react-redux';
import { Container, Content, Profile } from './styles';
import Notifications from '../Notifications';

export default function Header() {
  const name = useSelector((state) => state.user.profile.name);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{name}</strong>
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
