import { takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../../utilities/constants';
import { getAllUsersSaga } from './userSagas';

export default function* rootSaga() {
  yield takeLatest(actionTypes.GET_USER_REQUESTED, getAllUsersSaga);
}
