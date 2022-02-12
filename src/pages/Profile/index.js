import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { useSelector } from 'react-redux';

import Input from '~/components/Form';

import { Container } from './styles';

export default function Profile() {
  const formRef = useRef(null);
  const profile = useSelector((state) => state.user.profile);

  const handleSubmit = async (data) => {
    console.tron.log(data);
  };

  return (
    <Container>
      <Form initialData={profile} ref={formRef} onSubmit={handleSubmit}>
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

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
