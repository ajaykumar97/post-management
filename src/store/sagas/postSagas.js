import { call, put } from 'redux-saga/effects';

import { urls, requestMethods, actionTypes } from '../../utilities/constants';
import { request } from '../../utilities/request';
import logger from '../../utilities/logger';
import cloneDeep from 'clone-deep';
import store from '..';

function* getAllPostsSaga() {
  try {
    const config = {
      url: urls.getPosts,
      method: requestMethods.GET,
    };

    let { data } = yield call(request, config);

    logger.data('getPosts response is: ', data, true);

    data = data.map((post) => {
      post.key = String(post.id);
      return post;
    });

    const payload = {
      posts: data.splice(0, 50),
    };

    yield put({ type: actionTypes.GET_POSTS_SUCCEEDED, payload });
  } catch (error) {
    logger.apiError('getPosts error: ', error);
    yield put({ type: actionTypes.GET_POSTS_FAILED, });
  }
}

function* deletePostSaga({params}) {
  try {
    const {post} = params;

    const allPosts = cloneDeep(store.getState().post.posts);

    const allPostsAfterDeletingPost = allPosts.filter((postData) => postData.id !== post.id);

    const payload = {
      posts: allPostsAfterDeletingPost
    };

    yield put({ type: actionTypes.GET_POSTS_SUCCEEDED, payload });
  } catch (error) {
    logger.error('deletePost error: ', error);
  }
}

export {
  getAllPostsSaga,
  deletePostSaga
};
