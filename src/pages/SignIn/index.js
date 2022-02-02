/* eslint-disable react/jsx-no-bind */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '~/components/Form/Input';
import logo from '~/assets/logo.svg';

import signInForm from '~/validators/SignIn/signInForm';

export default function SignIn() {
  const formRef = useRef(null);

  const handleSubmit = async (data) => {
    await signInForm({ data, formRef });
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" placeholder="Seu e-mail" />
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
