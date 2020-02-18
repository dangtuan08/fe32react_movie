import * as ActionType from "../Type/ActionTypeMovie";

export const actBtnLoginModalClick = value => {
  return dispatch => {
    dispatch({
      type: ActionType.LOGIN_BTN_CLICK,
      value: value
    });
  };
};

export const actBtnSignUpModalClick = value => {
    return dispatch => {
      dispatch({
        type: ActionType.SIGNUP_BTN_CLICK,
        vaule: value
      });
    };
  };
  