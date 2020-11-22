import { call, put } from 'redux-saga/effects';
import {v4 as uuidv4} from 'uuid';

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

function* addNewPostSaga({params}) {
  try {
    const {data: {postTitle, postDescription}} = params;

    console.log('data: ', params)
    const id = uuidv4();
    const post = {
      id,
      key: id,
      userId: 1,
      title: postTitle,
      body: postDescription,
    };

    const allPosts = cloneDeep(store.getState().post.posts);

    allPosts.unshift(post);

    const payload = {posts: allPosts};

    yield put({ type: actionTypes.GET_POSTS_SUCCEEDED, payload });
  } catch (error) {
    logger.error('addNewPost error: ', error);
  }
}

export {
  getAllPostsSaga,
  deletePostSaga,
  addNewPostSaga
};
