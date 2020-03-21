import Axios from "axios";
import * as yup from "yup";

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Không được rỗng"),
  matKhau: yup
    .string()
    .required("*Không được rỗng")
    .min(6, "*Mật khẩu phải từ 6 ký tự"),
  hoTen: yup.string().required("*Không được rỗng"),
  email: yup
    .string()
    .required("*Không được rỗng")
    .email("*Email không đúng định dạng"),
  soDt: yup
    .string()
    .required("*Không được rỗng")
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      "Số điện thoại phải là số"
    )
});

class UserService {
  loginAxios = user => {
    return Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user
    });
  };
  signUpAxios = user => {
    return Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user
    });
  };
  infoUserAxios = userName => {
    return Axios({
      method: "POST",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: userName
    });
  };
  getListUserAxios = () => {
    return Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
    });
  };
  DeleteUserAxios = (userID, accessToken) => {
    return Axios({
      method: "DELETE",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userID}`,
      headers: { Authorization: "Bearer " + accessToken }
    });
  };
  UpdateUserAxios = (user, accessToken) => {
    return Axios({
      method: "PUT",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: user,
      headers: { Authorization: "Bearer " + accessToken }
    });
  };
  AddNewUserAxios = (user, accessToken) => {
    return Axios({
      method: "POST",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: user,
      headers: { Authorization: "Bearer " + accessToken }
    });
  };
}

export default UserService;
