import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { signFailure, signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password, navigate } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuário não é prestador');

      yield put(signFailure());
      return;
    }

    yield put(signInSuccess(token, user));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    navigate('/dashboard', { replace: true });
  } catch (err) {
    toast.error('Falha na autenticação');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, navigate } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    toast.success('Usuário cadastrado!');

    navigate('/', { replace: true });
  } catch (err) {
    console.tron.log(err);
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
