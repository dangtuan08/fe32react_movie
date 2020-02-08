import Axios from "axios";

class MovieService {
  getListMovieAxios = () => {
    return Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    });
  };
}



export default MovieService;
