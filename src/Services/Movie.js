import Axios from "axios";

class MovieService {
  getListMovieAxios = () => {
    return Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    });
  };

  getListMoviePageAxios = (soPhanTu = 4) => {
    return Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=${soPhanTu}`
    });
  };
  getMovieDetailAxios = maPhim => {
    return Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
    });
  };

  DeleteMovieAxios = (maPhim,accessToken) => {
    return Axios({
      method: "DELETE",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      headers: { Authorization: "Bearer " + accessToken }
    });
  };

  UpdateMovieAxios = (movie,accessToken) => {
    return Axios({
      method: "POST",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
      data: movie,
      headers: { Authorization: "Bearer " + accessToken }
    });
  };
  AddNewMovieAxios = (movie,accessToken) => {
    return Axios({
      method: "POST",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
      data: movie,
      headers: { Authorization: "Bearer " + accessToken }
    });
  };
  UpLoadImgAxios = (file,accessToken) => {
    return Axios({
      method: "POST",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
      data: file,
      // headers: { Authorization: "Bearer " + accessToken }
    });
  };
}

export default MovieService;
