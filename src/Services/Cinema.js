import Axios from "axios";

class CinemaService {
  getListCinemaAxios = () => {
    return Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
    });
  };
  getListTheaterAxios=(maHeThong)=>{
    return Axios({
      method: "GET",
      url:
        `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThong}`
    });
  }
  getInfoMovieTheaterAxios=(maPhim)=>{
    return Axios({
      method: "GET",
      url:
        `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    });
  }
}

export default CinemaService;
