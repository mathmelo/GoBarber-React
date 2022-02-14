import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';
import { userUpdateFailure, userUpdateSuccess } from './actions';

export function* userProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(userUpdateSuccess(response.data));

    toast.success('Usuário atualizado com sucesso!');
  } catch (err) {
    console.tron.log(err);
    toast.error('Error ao atualizar perfil, verifique seus dados!');
    yield put(userUpdateFailure());
  }
}

export default all([takeLatest('@user/USER_UPDATE_REQUEST', userProfile)]);
