import * as ActionType from "../Type/ActionTypeMovie";
// import Axios from "axios";
// import { movieService } from "./../../Services/index";

export const actChonGhe = (seat) => {
  return dispatch => {
    dispatch({
        type: ActionType.GHE_DANG_CHON,
        value: seat
      });
  };
};

export const actResetListSeat = () => {
  return dispatch => {
    dispatch({
        type: ActionType.RESET_DANH_SACH_GHE,
        value: []
      });
  };
};