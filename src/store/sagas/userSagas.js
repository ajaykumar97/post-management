import { call, put } from 'redux-saga/effects';

import { urls, requestMethods, actionTypes } from '../../utilities/constants';
import { request } from '../../utilities/request';
import logger from '../../utilities/logger';

function* getAllUsersSaga() {
  try {
    const config = {
      url: urls.getUsers,
      method: requestMethods.GET,
    };

    let { data } = yield call(request, config);

    logger.data('getUsers response is: ', data, true);

    data = data.map((user) => {
      user.key = String(user.id);
      return user;
    });

    const payload = {
      users: data,
    };


    yield put({ type: actionTypes.GET_USERS_SUCCEEDED, payload });
  } catch (error) {
    logger.error('Logout user error: ', error);
    yield put({ type: actionTypes.GET_USERS_FAILED, });
  }
}

export {
  getAllUsersSaga
};
