import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { date } from "yup";

export default class MovieTime extends Component {
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
        console.log(this.state);
      }
    );
  }

  renderGioChieu() {
    let { gioChieu } = this.state;
    if (gioChieu.length > 0) {
      return gioChieu.map((item, index) => {
        return (
          <NavLink
          key={index}
            className="btn btn-outline-secondary mr-2 mb-2"
            to={`/booking-tix/${item.maLichChieu}`}
          >
            {item.gioChieu}
          </NavLink>
        );
      });
    }
    return ""
  }

  render() {
    return this.renderGioChieu();
  }
}
