import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import logo from '~/assets/logo.svg';
import Input from '~/components/Form/input';

export default function SignIn() {
  const handleSubmit = (data) => {
    console.tron.log(data);
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
