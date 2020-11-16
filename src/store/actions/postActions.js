import { actionTypes } from '../../utilities/constants';

const getAllPosts = () => ({
  type: actionTypes.GET_POSTS_REQUESTED
});

export {
  getAllPosts
};
