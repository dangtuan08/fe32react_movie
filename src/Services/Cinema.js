import Axios from "axios";

class CinemaService {
  // lấy thông tin hệ thống BHD,CGV,Galaxy...
  getListCinemaAxios = () => {
    return Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
    });
  };

  //lấy thông tin các cụm rạp thuọc hệ thống
  getListTheaterAxios = maHeThong => {
    return Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThong}`
    });
  };

  //lấy thông tin phim gồm thông tin về các cụm rạp, giờ chiếu, ngày chiếu...
  getInfoMovieTheaterAxios = maPhim => {
    return Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    });
  };

  getThongTinLichChieuTheoHeThongRapAxios = maHeThong => {
    return Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThong}&maNhom=GP01`
    });
  };
}

export default CinemaService;
