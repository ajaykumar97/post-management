import { actionTypes } from '../../utilities/constants';

const initialState = {
  posts: [],
  loading: false,
  gettingPosts: true
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SESSION_EXPIRED:
      return { ...initialState };
    case actionTypes.GET_POSTS_SUCCEEDED:
      return { ...state, posts: payload.posts, gettingPosts: false };
    case actionTypes.GET_POSTS_FAILED:
      return { ...state, gettingPosts: false };
    default:
      return state;
  }
};

export default postReducer;
