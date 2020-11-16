import { takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../../utilities/constants';
import { getAllPostsSaga } from './postSagas';

export default function* rootSaga() {
  yield takeLatest(actionTypes.GET_POSTS_REQUESTED, getAllPostsSaga);
}
