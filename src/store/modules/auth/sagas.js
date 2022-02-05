import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password, navigate } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('usuário não é prestador');
    return;
  }

  yield put(signInSuccess(token, user));

  navigate('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
