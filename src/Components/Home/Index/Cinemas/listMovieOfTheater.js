import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../../Store/Actions/Cinema";
import { cinemaService } from "../../../../Services/";
import MovieTime from "./movieTime";

class ListMovieOfTheater extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thongTinLichChieuTheoHeThong: [],
      dsPhim: []
    };
  }
  componentDidMount() {
    // console.log(this.props);
    cinemaService
      .getThongTinLichChieuTheoHeThongRapAxios(this.props.maHeThongRap)
      .then(
        result => {
          this.setState(
            {
              thongTinLichChieuTheoHeThong: result.data
            },
            () => {
              this.setPhim();
              // console.log(this.state);
              
            }
          );
        }
      )
      .catch();
  }
  setPhim = () => {
    if (this.state.thongTinLichChieuTheoHeThong.length > 0) {
      let dsPhim=[]
      this.state.thongTinLichChieuTheoHeThong.map((hethong, index) => {
        // console.log(`thong tin lich chieu cua he thong${hethong.maHeThongRap}`,hethong);
        
        hethong.lstCumRap.map((cumRap, index) => {
          if (cumRap.maCumRap === this.props.maCumRap) {
            // console.log(`danh sach phim cua cum rạp ${cumRap.maCumRap} tương ứng ${this.props.maCumRap}`,cumRap.danhSachPhim);
            
            cumRap.danhSachPhim.map((item, index) => {

              // console.log(`phim ${item.tenPhim} tương ứng ${this.props.maCumRap}`,item);
              
              let phim = {
                maPhim: item.maPhim,
                tenPhim: item.tenPhim,
                lstLichChieuTheoPhim: item.lstLichChieuTheoPhim
              };
              dsPhim.push(phim)
              
            });
          }
        });
      });
      this.setState(
        {
          dsPhim
        },
        () => {
        console.log(this.state.dsPhim);
        
        }
      );
    } else {
      console.log("null");
    }
  };
  renderDsPhim = () => {
    if (this.state.dsPhim.length > 0) {
      // console.log("ds phim co ton ta");
      //duyệt mảng danh sách phim của cụm rạp chiếu
      return this.state.dsPhim.map((item, stt) => {
        // duyet mảng danh sách chi tiết các bộ phim để lấy thông tin
        return this.props.listMovie.map((movie, index) => {
          // nếu mã phim của cụm rạp bằng mã phim trong danh sách chi tiết các bộ phim thì render thông tin phim + thời gian lịch chiếu trong mảng danh sách phim
          if (item.maPhim === movie.maPhim) {
            return (
              <div className="wrapMovie" key={index}>
                <div
                  className="movie-info  d-flex flex-row pt-3"
                  data-toggle="collapse"
                  data-target={"#" + index}
                >
                  <img
                    className="pr-2"
                    src={movie.hinhAnh}
                    alt={movie.biDanh}
                  />
                  <div className="wrapInfo">
                    <p>
                      <span className="ageType">C13</span>
                      <span className="movieTitle">{movie.tenPhim}</span>
                    </p>
                    <p className="movie-total-time">
                      123 phút - TIX 8.3 - IMDb 0
                    </p>
                  </div>
                </div>
                <div id={index} className="listTime pt-2 collapse show">
                  <p className="s-version">2D Digital</p>
                  {/* truyền vào mảng lịch chiếu cho các nút để lấy ra giờ chiếu */}
                  <MovieTime lstLichChieuTheoPhim={item.lstLichChieuTheoPhim} />
                </div>
              </div>
            );
          } else {
            return "";
          }
        });
      });
    } else {
      return (
        <div>
          <span>Không có xuất chiếu</span>
        </div>
      );
    }
  };
  render() {
    return <>{this.renderDsPhim()}</>;
  }
}

const mapStateToProps = state => {
  return {
    ttLichChieuHeThongRap: state.CinemaReducer.ttLichChieuHeThongRap,
    listMovie: state.MovieReducer.listMovie
  };
};
const mapDispatchToProps = dispath => {
  return {
    getThongTinLichChieuTheoHeThongRap: maHeThongRap => {
      dispath(action.actGetThongTinLichChieuTheoHeThongRapAPI(maHeThongRap));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovieOfTheater);
