import React, { Component, Fragment } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bookingService } from "../../../Services/index";
import Swal from "sweetalert2";
import shortid from "shortid";

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
  getId = () => {
    const id = shortid.generate();
    console.log(id);
    return id;
  };
  handleOnClick = () => {
    if (localStorage.getItem("user")) {
      const { history } = this.props;
      let danhSachVe = [];
      this.props.listSeat.map((item, index) => {
        danhSachVe.push({
          maGhe: item.maGhe,
          giaVe: item.giaVe
        });
      });
      let user = JSON.parse(localStorage.getItem("user"));

      let danhSachGheDat = {
        maLichChieu: this.props.chiTietLichChieu.thongTinPhim.maLichChieu,
        danhSachVe: danhSachVe,
        taiKhoanNguoiDung: user.taiKhoan
      };
      console.log(danhSachGheDat);
      bookingService
        .DatVeAxios(danhSachGheDat, user.accessToken)
        .then(result => {
          console.log(result);

          let timerInterval;
          Swal.fire({
            icon: "success",
            title: "Đặt vé thành công!",
            html: "Chuyển về trang chủ.",
            timer: 2000,
            timerProgressBar: true,
            onBeforeOpen: () => {
              Swal.showLoading();
              timerInterval = setInterval(() => {}, 100);
            },
            // khi hết chờ hết 2000 mili giây thì alert đóng và chuyển về trang chủ history.push(`/`);
            onClose: () => {
              history.push(`/`);
              clearInterval(timerInterval);
            }
          }).then(result => {
            /* Read more about handling dismissals below */
            // khi người dùng đóng hoặc ấn ra ngoài thông báo để tắt thì chuyển trang ngay
            if (result.dismiss === Swal.DismissReason.timer) {
              history.push(`/`);
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }else{
      Swal.fire({
        icon: "error",
        title: "Vui lòng đăng nhập trước"
        // text: "Tài khoản hoặc mật khẩu không đúng"
      });
    }
  };
  render() {
    let { chiTietLichChieu } = this.props;
    console.log(this.props.listSeat);

    return (
      <Fragment key={this.getId()}>
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
        {this.props.listSeat.length > 0 ? (
          <button
            className="booking-btn-buy btn btn-success py-3"
            onClick={this.handleOnClick}
          >
            ĐẶT VÉ
          </button>
        ) : (
          <button className="booking-btn-buy btn btn-success py-3" disabled>
            ĐẶT VÉ
          </button>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    listSeat: state.BookingReducer.listSeat
  };
};
export default connect(mapStateToProps, null)(withRouter(BookingInfo));
