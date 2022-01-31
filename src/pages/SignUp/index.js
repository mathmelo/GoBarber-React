import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import logo from '~/assets/logo.svg';
import Input from '~/components/Form/input';

export default function SignUp() {
  const handleSubmit = (data) => {
    console.tron.log(data);
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="button">Criar conta</button>
        <Link to="/login">Já tenho login</Link>
      </Form>
    </>
  );
}
