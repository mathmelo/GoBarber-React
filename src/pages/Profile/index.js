import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { userUpdateRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import { Form } from '@unform/web';
import Input from '~/components/Form';
import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = async (data) => {
    dispatch(userUpdateRequest(data));
  };

  const handleSignOut = () => {
    dispatch(signOut(navigate));

    navigate('/');
  };

  return (
    <Container>
      <Form initialData={profile} ref={formRef} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Sua nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
        />

        <button type="submit">
          {loading ? 'Carregando...' : 'Atualizar perfil'}
        </button>
      </Form>

      <button onClick={handleSignOut} type="button">
        Sair do GoBarber
      </button>
    </Container>
  );
}
