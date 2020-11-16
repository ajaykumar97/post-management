import { actionTypes } from '../../utilities/constants';

const getAllPosts = () => ({
  type: actionTypes.GET_POSTS_REQUESTED
});

const deletePost = (params) => ({
  type: actionTypes.DELETE_POST_REQUESTED,
  params
});

export {
  getAllPosts,
  deletePost
};
