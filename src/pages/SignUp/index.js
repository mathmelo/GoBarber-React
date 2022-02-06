/* eslint-disable react/jsx-no-bind */
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';

import signUpForm from '~/validators/SignUp/signUpForm';

import signUpRequest from '~/store/modules/auth/actions';

import Input from '~/components/Form/Input';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data, { reset }) => {
    const { name, email, password } = data;
    const inputPass = await signUpForm({ data, formRef });

    if (inputPass) {
      dispatch(signUpRequest(name, email, password, navigate));
    }

    reset();
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
