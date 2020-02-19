import * as ActionType from "../Store/Type/ActionTypeMovie";

const initialState = {
  user: {}
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      // console.log(action.user);
      state.user = action.user;
      return { ...state };

    case ActionType.SET_USER_LOGIN:
      // console.log(action.user);

      state.user = action.user;
      return { ...state };

    default:
      return state;
  }
};

export default UserReducer;
