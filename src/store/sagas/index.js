import { takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../../utilities/constants';
import { getAllPostsSaga, deletePostSaga, addNewPostSaga } from './postSagas';

export default function* rootSaga() {
  yield takeLatest(actionTypes.GET_POSTS_REQUESTED, getAllPostsSaga);
  yield takeLatest(actionTypes.DELETE_POST_REQUESTED, deletePostSaga);
  yield takeLatest(actionTypes.ADD_NEW_POST_REQUESTED, addNewPostSaga);
}
