import React, { Component } from "react";
import * as actionMovie from "../../../../Store/Actions/Movie";
import * as actionCinema from "../../../../Store/Actions/Cinema";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

class HomeTool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieID: "",
      movieValid: false,
      movieName: "",
      theaterID: "",
      theaterName: "",
      theaterValid: false,
      day: "",
      dayValid: false,
      xuatChieu: {
        maLichChieu: "",
        gioChieu: ""
      }
    };
  }

  renderMovie = () => {
    // console.log(this.props.listMovie);
    return this.props.listMovie.map((movie, index) => {
      return (
        // <option key={index} value={movie.maPhim}>
        //   {movie.tenPhim}
        // </option>
        <button
          key={index}
          value={movie.maPhim}
          className="dropdown-item"
          name="phim"
          onClick={this.handleOnClick}
        >
          {movie.tenPhim}
        </button>
      );
    });
  };

  //Render các cụm rạp
  renderTheater = () => {
    let { listMovieTheater } = this.props;
    if (this.state.movieValid && listMovieTheater.heThongRapChieu) {
      // console.log(listMovieTheater.heThongRapChieu);
      return listMovieTheater.heThongRapChieu.map((heThongRapChieu, index) => {
        return heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          return (
            <button
              key={index}
              value={cumRapChieu.maCumRap}
              className="dropdown-item"
              onClick={this.handleOnClick}
              name="rap"
            >
              {cumRapChieu.tenCumRap}
            </button>
          );
        });
      });
    } else {
      return (
        <button value="" className="dropdown-item" disabled>
          Vui lòng chọn phim
        </button>
      );
    }
  };

  //render danh sách ngày chiếu
  renderDay = () => {
    let { listMovieTheater } = this.props;
    let mangNgayChieu = [];
    if (
      this.state.movieValid &&
      this.state.theaterValid &&
      listMovieTheater.heThongRapChieu
    ) {
      // console.log("render day");
      listMovieTheater.heThongRapChieu.map((heThongRapChieu, index) => {
        heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          cumRapChieu.lichChieuPhim.map((lichChieuPhim, index) => {
            //  (
            //
            // );
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
    let { listMovieTheater } = this.props;
    let mangGioChieu = [];
    if (
      this.state.movieValid &&
      this.state.theaterValid &&
      listMovieTheater.heThongRapChieu
    ) {
      // console.log("render day");
      listMovieTheater.heThongRapChieu.map((heThongRapChieu, index) => {
        heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          if (cumRapChieu.maCumRap === this.state.theaterID) {
            cumRapChieu.lichChieuPhim.map((lichChieuPhim, index) => {
              let day = new Date(
                lichChieuPhim.ngayChieuGioChieu
              ).toLocaleDateString();
              let time = new Date(
                lichChieuPhim.ngayChieuGioChieu
              ).toLocaleTimeString();
              // const found = mangGioChieu.find(ngay => ngay === day);
              if (this.state.day === day) {
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
  handleOnClick = event => {
    // sự kiện cho lần đầu chọn phim
    if (event.target.name === "phim" && this.state.movieValid === false) {
      this.props.getMovieTheater(event.target.value);
      this.setState(
        {
          movieID: event.target.value,
          movieValid: true,
          movieName: event.target.innerHTML
        },
        () => {
          console.log(this.state);
        }
      );
    }
    // sự kiện cho lần n chọn phim
    if (event.target.name === "phim" && this.state.movieValid === true) {
      this.props.getMovieTheater(event.target.value);
      this.setState(
        {
          movieID: event.target.value,
          theaterName: "",
          movieName: event.target.innerHTML,
          theaterID: "",
          theaterName: "",
          theaterValid: false,
          day: "",
          dayValid: false,
          xuatChieu: {
            maLichChieu: "",
            gioChieu: ""
          }
        },
        () => {
          console.log(this.state);
        }
      );
    }

    //sự kiện cho chọn rạp
    if (event.target.name === "rap" && this.state.theaterValid === false) {
      this.setState(
        {
          theaterName: event.target.innerHTML,
          theaterValid: true,
          theaterID: event.target.value
        },
        () => {
          console.log(this.state);
        }
      );
    }
    // sự kiện chọn lại rạp
    if (event.target.name === "rap" && this.state.theaterValid === true) {
      this.setState(
        {
          theaterName: event.target.innerHTML,
          theaterValid: true,
          theaterID: event.target.value,
          day: "",
          dayValid: false,
          xuatChieu: {
            maLichChieu: "",
            gioChieu: ""
          }
        },
        () => {
          console.log(this.state);
        }
      );
    }

    if (event.target.name === "ngayChieu" && this.state.dayValid === false) {
      // console.log(event.target.value);
      this.setState(
        {
          day: event.target.value,
          dayValid: true
        },
        () => {
          console.log(this.state);
        }
      );
    }

    if (event.target.name === "ngayChieu" && this.state.dayValid === true) {
      // console.log(event.target.value);
      this.setState(
        {
          day: event.target.value,
          xuatChieu: {
            maLichChieu: "",
            gioChieu: ""
          }
        },
        () => {
          console.log(this.state);
        }
      );
    }

    if (event.target.name === "gioChieu") {
      // console.log(event.target.value);
      this.setState(
        {
          xuatChieu: {
            maLichChieu: event.target.value,
            gioChieu: event.target.innerHTML
          }
        },
        () => {
          console.log(this.state);
        }
      );
    }
    if (event.target.name === "muaVe") {
      console.log(event.target.value);
      if (localStorage.getItem("user")) {
        this.props.history.push(`/booking-tix/${event.target.value}`);
      } else {
        Swal.fire({
          icon: "error",
          title: "Vui lòng đăng nhập trước"
          // text: "Tài khoản hoặc mật khẩu không đúng"
        });
      }
    }
  };

  render() {
    return (
      <>
        <section className="homeTools py-5" id="homeTools">
          <div className="container">
            <div className="row homeTools--row ">
              <div className="col-lg-3 col-md-3 homeTools-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="ddphim"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.state.movieName === ""
                      ? `Phim`
                      : this.state.movieName}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="ddphim">
                    {this.renderMovie()}
                  </div>
                </div>
              </div>
              {/* danh sách rạp */}
              <div className="col-lg-3 col-md-3 homeTools-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="triggerId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.state.theaterName === ""
                      ? `Rạp`
                      : this.state.theaterName}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="triggerId">
                    {this.renderTheater()}
                  </div>
                </div>

                {/* <select
                  className="form-control"
                  id="sel-theater"
                  name="sel-theater"
                  onChange={this.handleOnchange}
                >
                  <option selected hidden>
                    Rạp
                  </option>
                  {this.renderTheater()}
                </select> */}
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
                    {this.state.day === "" ? `Ngày xem` : this.state.day}
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
                    {this.state.xuatChieu.gioChieu === ""
                      ? `Xuất chiếu`
                      : this.state.xuatChieu.gioChieu}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="gioXem">
                    {this.renderTime()}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 homeTools--btnBuy">
                {this.state.movieValid &&
                this.state.theaterValid &&
                this.state.dayValid &&
                this.state.xuatChieu.maLichChieu !== "" ? (
                  <button
                    className="btn btn-success text-center btn-buy-ticket"
                    name="muaVe"
                    value={this.state.xuatChieu.maLichChieu}
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
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    listMovie: state.MovieReducer.listMovie,
    listMovieTheater: state.CinemaReducer.movieTheater
  };
};

const mapDispatchToProps = dispath => {
  return {
    getListTheater: maHeThong => {
      dispath(actionCinema.actGetListTheaterAPI(maHeThong));
    },
    getMovieTheater: maPhim => {
      dispath(actionCinema.actGetInfoMovieTheaterAPI(maPhim));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeTool));
