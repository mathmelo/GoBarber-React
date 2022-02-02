/* eslint-disable react/jsx-no-bind */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '~/components/Form/Input';
import logo from '~/assets/logo.svg';

import signUpForm from '~/validators/SignUp/signUpForm';

export default function SignUp() {
  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    const inputPass = await signUpForm({ data, formRef });

    if (inputPass) {
      reset();
    }
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/login">Já tenho login</Link>
      </Form>
    </>
  );
}
