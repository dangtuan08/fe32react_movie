import * as ActionType from "../Type/ActionTypeMovie";
import Axios from "axios";
import { userService } from "./../../Services/index";
import Swal from "sweetalert2";

export const actLoginAPI = user => {
  return dispatch => {
    userService
      .loginAxios(user)
      .then(result => {
        dispatch({
          type: ActionType.LOGIN,
          user: result.data
        });
        localStorage.setItem("user", JSON.stringify(result.data));
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",
          text: ""
        });
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Đăng nhập thất bại",
          text: "Tài khoản hoặc mật khẩu không đúng"
        });
      });
  };
};

export const actSetUserLogin = (user) => {
  return dispatch => {
    dispatch({
      type: ActionType.SET_USER_LOGIN,
      user: user
    });
  };
};