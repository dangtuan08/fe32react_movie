import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import Swal from "sweetalert2";

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maHeThongRap: "",
      tenHeThongRap: "",
      chonHeThongRap: false,
      maCumRap: "",
      tenCumRap: "",
      chonCumRap: false,
      ngayXem: "",
      chonNgayXem: false,
      maLichChieu: "",
      gioChieu: "",
      chonXuatChieu: false
    };
  }

  handleOnClick = event => {
    console.log(event.target.name);

    switch (event.target.name) {
      case "heThongRap":
        if (!this.state.chonHeThongRap) {
          this.setState({
            maHeThongRap: event.target.value,
            tenHeThongRap: event.target.innerHTML,
            chonHeThongRap: true
          });
        }
        if (this.state.chonHeThongRap) {
          this.setState({
            maHeThongRap: event.target.value,
            tenHeThongRap: event.target.innerHTML,
            chonHeThongRap: true,
            maCumRap: "",
            tenCumRap: "",
            chonCumRap: false,
            ngayXem: "",
            chonNgayXem: false,
            maLichChieu: "",
            gioChieu: "",
            chonXuatChieu: false
          });
        }
        break;
      case "cumRap":
        //   đã chọn hệ thống rạp, chưa chọn rạp
        if (this.state.chonHeThongRap && !this.state.chonCumRap) {
          this.setState(
            {
              maCumRap: event.target.value,
              tenCumRap: event.target.innerHTML,
              chonCumRap: true
            },
            () => {
              console.log(this.state);
            }
          );
        }
        //   đã chọn hệ thống rạp và chọn rạp
        if (this.state.chonHeThongRap && this.state.chonCumRap) {
          this.setState(
            {
              maCumRap: event.target.value,
              tenCumRap: event.target.innerHTML,
              chonCumRap: true,
              ngayXem: "",
              chonNgayXem: false,
              maLichChieu: "",
              gioChieu: "",
              chonXuatChieu: false
            },
            () => {
              console.log(this.state);
            }
          );
        }
        break;

      case "ngayChieu":
        if (this.state.chonCumRap && !this.state.chonNgayXem) {
          this.setState(
            {
              ngayXem: event.target.innerHTML,
              chonNgayXem: true
            },
            () => {
              console.log(this.state);
            }
          );
        }
        if (this.state.chonCumRap && this.state.chonNgayXem) {
          this.setState(
            {
              ngayXem: event.target.innerHTML,
              chonNgayXem: true,
              maLichChieu: "",
              gioChieu: "",
              chonXuatChieu: false
            },
            () => {
              console.log(this.state);
            }
          );
        }
        break;
      case "gioChieu":
        if (this.state.chonNgayXem) {
          this.setState(
            {
              maLichChieu: event.target.value,
              gioChieu: event.target.innerHTML,
              chonXuatChieu: true
            },
            () => {
              console.log(this.state);
            }
          );
        }

        break;
      case "muaVe":
        if (localStorage.getItem("user")) {
          const { history } = this.props;
          console.log(history);
          
          if (history) history.push(`/booking-tix/${this.state.maLichChieu}`);
        } else {
          Swal.fire({
            icon: "error",
            title: "Vui lòng đăng nhập trước"
            // text: "Tài khoản hoặc mật khẩu không đúng"
          });
        }
        break;
      default:
        break;
    }
  };

  renderHeThongRap() {
    let { lichChieuPhim } = this.props;
    if (lichChieuPhim) {
      return lichChieuPhim.heThongRapChieu.map((item, index) => {
        return (
          <button
            key={index}
            value={item.maHeThongRap}
            className="dropdown-item"
            name="heThongRap"
            onClick={this.handleOnClick}
          >
            {item.tenHeThongRap}
          </button>
        );
      });
    }
  }

  renderCumRap() {
    let { lichChieuPhim } = this.props;
    if (lichChieuPhim && this.state.chonHeThongRap) {
      return lichChieuPhim.heThongRapChieu.map((heThongRap, index) => {
        if (this.state.maHeThongRap === heThongRap.maHeThongRap) {
          return heThongRap.cumRapChieu.map((item, index) => {
            return (
              <button
                key={index}
                value={item.maCumRap}
                className="dropdown-item"
                onClick={this.handleOnClick}
                name="cumRap"
              >
                {item.tenCumRap}
              </button>
            );
          });
        }
      });
    } else {
      return (
        <button
          value=""
          className="dropdown-item"
          //   onClick={this.handleOnClick}
          name="cumRap"
          disabled
        >
          Vui lòng chọn hệ thống rạp
        </button>
      );
    }
  }

  renderDay = () => {
    let { lichChieuPhim } = this.props;
    let mangNgayChieu = [];
    if (this.state.chonHeThongRap && this.state.chonCumRap && lichChieuPhim) {
      // console.log("render day");
      lichChieuPhim.heThongRapChieu.map((heThongRapChieu, index) => {
        heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          cumRapChieu.lichChieuPhim.map((lichChieuPhim, index) => {
            let day = new Date(
              lichChieuPhim.ngayChieuGioChieu
            ).toLocaleDateString();
            const found = mangNgayChieu.find(ngay => ngay === day);
            if (found) {
            } else {
              mangNgayChieu.push(day);
            }
          });
        });
      });
      // console.log(mangNgayChieu);
      return mangNgayChieu.map((ngay, index) => {
        return (
          <button
            key={index}
            value={ngay}
            className="dropdown-item"
            onClick={this.handleOnClick}
            name="ngayChieu"
          >
            {ngay}
          </button>
        );
      });
    } else {
      return (
        <button value="" className="dropdown-item" disabled>
          Vui lòng chọn phim và rạp
        </button>
      );
    }
  };

  renderTime = () => {
    let { lichChieuPhim } = this.props;
    let mangGioChieu = [];
    // console.log(this.state);

    if (
      this.state.chonHeThongRap &&
      this.state.chonCumRap &&
      this.state.chonNgayXem
    ) {
      //   console.log("render day");
      lichChieuPhim.heThongRapChieu.map((heThongRapChieu, index) => {
        heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          if (cumRapChieu.maCumRap === this.state.maCumRap) {
            cumRapChieu.lichChieuPhim.map((lichChieuPhim, index) => {
              let day = new Date(
                lichChieuPhim.ngayChieuGioChieu
              ).toLocaleDateString();
              let time = new Date(
                lichChieuPhim.ngayChieuGioChieu
              ).toLocaleTimeString();
              // const found = mangGioChieu.find(ngay => ngay === day);
              if (this.state.ngayXem === day) {
                mangGioChieu.push({
                  maLichChieu: lichChieuPhim.maLichChieu,
                  gioChieu: time
                });
              } else {
              }
            });
          }
        });
      });
      // console.log(mangNgayChieu);
      if (mangGioChieu.length > 0) {
        return mangGioChieu.map((item, index) => {
          return (
            <button
              key={index}
              value={item.maLichChieu}
              className="dropdown-item"
              onClick={this.handleOnClick}
              name="gioChieu"
            >
              {item.gioChieu}
            </button>
          );
        });
      } else {
        return (
          <button value="" className="dropdown-item" name="gioChieu" disabled>
            Không có xuất chiếu
          </button>
        );
      }
    } else {
      return (
        <button value="" className="dropdown-item" disabled>
          Vui lòng chọn phim, rạp và ngày xem
        </button>
      );
    }
  };
  render() {
    // console.log(this.props);

    return (
      <>
        <div className="homeTools py-5" id="homeTools">
          <div className="container">
            <div className="row homeTools--row ">
              <div className="col-lg-3 col-md-3 homeTools-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="ddHeThongRap"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.state.tenHeThongRap === ""
                      ? `Hệ thống rạp`
                      : this.state.tenHeThongRap}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="ddphim">
                    {this.renderHeThongRap()}
                    {/* <button
                      value="{movie.maHeThongRap}"
                      className="dropdown-item"
                      name="heThongRap"
                      //   onClick={this.handleOnClick}
                    >
                      BHD Star
                    </button> */}
                  </div>
                </div>
              </div>
              {/* danh sách rạp */}
              <div className="col-lg-3 col-md-3 homeTools-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="cumRapChieu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.state.tenCumRap === "" ? `Rạp` : this.state.tenCumRap}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="triggerId">
                    {this.renderCumRap()}
                    {/* <button
                      value="{cumRapChieu.maCumRap}"
                      className="dropdown-item"
                      //   onClick={this.handleOnClick}
                      name="cumRap"
                    >
                      Cụm rạp chiếu
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 homeTools-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="ngayXem"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.state.ngayXem === ""
                      ? `Ngày Xem`
                      : this.state.ngayXem}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="ngayXem">
                    {this.renderDay()}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 homeTools-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="gioXem"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.state.gioChieu === ""
                      ? `Xuất chiếu`
                      : this.state.gioChieu}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="gioXem">
                    {this.renderTime()}
                    {/* <button
                      value="{item.maLichChieu}"
                      className="dropdown-item"
                      //   onClick={this.handleOnClick}
                      name="gioChieu"
                    >
                      Giờ chiếu
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 homeTools--btnBuy">
                {this.state.chonHeThongRap &&
                this.state.chonCumRap &&
                this.state.chonNgayXem &&
                this.state.chonXuatChieu ? (
                  // <Link
                  //   className="btn btn-success text-center btn-buy-ticket w-100"
                  //   to={`/booking-tix/${this.state.maLichChieu}`}
                  // >
                  //   Mua vé
                  // </Link>
                  <button
                    className="btn btn-success text-center btn-buy-ticket w-100"
                    name="muaVe"
                    onClick={this.handleOnClick}
                  >
                    Mua vé
                  </button>
                ) : (
                  <button
                    className="btn btn-success text-center btn-buy-ticket"
                    disabled
                  >
                    Mua vé
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Booking);
