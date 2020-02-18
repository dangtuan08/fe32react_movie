import * as ActionType from "../Store/Type/ActionTypeMovie";

const initialState = {
  btnLoginClick: false,
  btnSignUpClick: false
};

const ModalReducer = (state = initialState, action) => {
    console.log(action);
    
  switch (action.type) {
    case ActionType.LOGIN_BTN_CLICK:
      state.btnLoginClick = action.value;
      return { ...state };
    case ActionType.SIGNUP_BTN_CLICK:
      state.btnSignUpClick = action.value;
      return { ...state };
    default:
      return state;
  }
};

export default ModalReducer;
