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

    navigate('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticaçãp');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
