import Axios from "axios";

class BookingService {
  layDanhSachPhongVeAxios = maLichChieu => {
    return Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    });
  };

  DatVeAxios = (data, accessToken) => {
    return Axios({
      method: "POST",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
      data: data,
      headers: { Authorization: "Bearer " + accessToken }
    });
  };
}

export default BookingService;
