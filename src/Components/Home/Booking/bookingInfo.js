import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class BookingInfo extends Component {
  renderTenGhe = () => {
    return this.props.listSeat.map((item, index) => {
      return (
        <span className="pr-1 color-ghe" key={index}>
          {item.tenGhe}
        </span>
      );
    });
  };

  renderGia = () => {
    let thanhTien = 0;
    this.props.listSeat.map((item, index) => {
      thanhTien += item.giaVe;
    });
    return thanhTien;
  };
  render() {
    let { chiTietLichChieu } = this.props;
    console.log(this.props.listSeat);

    return (
      <>
        <div className="text-center py-4">
          <h1 className="money">{this.renderGia()} VND</h1>
        </div>
        <hr />
        <div className="booking-tiket-detail">
          <p className="movie-name ">
            <span className="age px-3 py-1">P</span>{" "}
            {chiTietLichChieu.thongTinPhim.tenPhim}
          </p>
          <p> {chiTietLichChieu.thongTinPhim.tenCumRap}</p>
          <p>
            <span>
              {" "}
              {`${chiTietLichChieu.thongTinPhim.ngayChieu} - ${chiTietLichChieu.thongTinPhim.gioChieu} -
                      ${chiTietLichChieu.thongTinPhim.tenRap}`}
            </span>
          </p>
          <hr />
          <p className="color-ghe py-3">Ghế: {this.renderTenGhe()}</p>
          <hr />
        </div>
        <div className="booking-btn-buy btn btn-success py-3">ĐẶT VÉ</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    listSeat: state.BookingReducer.listSeat
  };
};
export default connect(mapStateToProps, null)(withRouter(BookingInfo));
