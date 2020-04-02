import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { date } from "yup";
import Swal from "sweetalert2";
class MovieTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gioChieu: []
    };
  }

  componentDidMount() {
    const NGAYCHIEU = "1/1/2019";
    let mangGioChieu = [];
    this.props.lstLichChieuTheoPhim.map((item, index) => {
      // trích ngày từ chuỗi ngayChieuGioChieu
      let day = new Date(item.ngayChieuGioChieu).toLocaleDateString();
      // trích giờ từ chuỗi ngayChieuGioChieu
      let time = new Date(item.ngayChieuGioChieu).toLocaleTimeString();

      // console.log(day);
      if (day === NGAYCHIEU) {
        let xuatChieu = {
          maLichChieu: item.maLichChieu,
          ngayChieu: day,
          gioChieu: time
        };
        mangGioChieu.push(xuatChieu);
      }
    });
    // console.log(mangGioChieu);
    this.setState(
      {
        gioChieu: mangGioChieu
      },
      () => {
        // console.log(this.state);
      }
    );
  }
  handleOnClick = e => {
    if (localStorage.getItem("user")) {
      if (e.target.name === "gioChieu")
        this.props.history.push(`/booking-tix/${e.target.value}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "Vui lòng đăng nhập trước"
        // text: "Tài khoản hoặc mật khẩu không đúng"
      });
    }
  };

  renderGioChieu() {
    let { gioChieu } = this.state;
    if (gioChieu.length > 0) {
      return gioChieu.map((item, index) => {
        return (
          <button
            key={index}
            className="btn btn-outline-secondary mr-2 mb-2"
            value={item.maLichChieu}
            name="gioChieu"
            onClick={this.handleOnClick}
          >
            {item.gioChieu}
          </button>
        );
      });
    }
    return "";
  }

  render() {
    return this.renderGioChieu();
  }
}
export default withRouter(MovieTime);
