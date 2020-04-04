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

export const actLoginAdmin = (user, history) => {
  return dispatch => {
    // Axios({
    //   method: "POST",
    //   url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    //   data: user
    // })
    userService
      .loginAxios(user)
      .then(result => {
        // console.log(result.data);
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("UserAdmin", JSON.stringify(result.data));
          alert("Login success");
          history.push("/quan-ly-phim");
        } else {
          alert("K có quyền truy cập");
        }
      })
      .catch(err => {
        alert(err.response.data)
        console.log(err.response.data);
      });
  };
};
