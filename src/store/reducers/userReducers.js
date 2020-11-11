import { actionTypes } from '../../utilities/constants';

const initialState = {
  users: [],
  loading: false,
  gettingUsers: true
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SESSION_EXPIRED:
      return { ...initialState };
    case actionTypes.STOP_USER_LOADING_REQUESTED:
      return { ...state, loading: false };
    case actionTypes.GET_USERS_SUCCEEDED:
      return { ...state, users: payload.users, gettingUsers: false };
    case actionTypes.GET_USERS_FAILED:
      return { ...state, gettingUsers: false };
    case actionTypes.LOGIN_SUCCEEDED:
      return { ...state, loading: false, ...payload.userData, };
    default:
      return state;
  }
};

export default userReducer;
