import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '@unform/web';

import { signInRequest } from '~/store/modules/auth/actions';

import Input from '~/components/Form/Input';
import logo from '~/assets/logo.svg';

import signInForm from '~/validators/SignIn/signInForm';

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }) => {
    const inputPass = await signInForm({ email, password }, formRef);

    if (inputPass) {
      dispatch(signInRequest(email, password, navigate));
    }
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
