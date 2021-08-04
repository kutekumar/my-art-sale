import { AUTHENTICATE, LOGOUT } from "../action/auth";

const initialState = {
  token: null,
  useId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
      };

    case LOGOUT:
      return initialState;

    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId,
    //   };

    default:
      return state;
  }
};
