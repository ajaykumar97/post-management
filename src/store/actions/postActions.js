import { actionTypes } from '../../utilities/constants';

const getAllPosts = () => ({
  type: actionTypes.GET_POSTS_REQUESTED
});

const deletePost = (params) => ({
  type: actionTypes.DELETE_POST_REQUESTED,
  params
});

const addNewPost = (params) => ({
  type: actionTypes.ADD_NEW_POST_REQUESTED,
  params
});

export {
  getAllPosts,
  deletePost,
  addNewPost
};
