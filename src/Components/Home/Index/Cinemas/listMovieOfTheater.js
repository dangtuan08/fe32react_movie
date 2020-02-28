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
      .then(result => {
        this.setState(
          {
            thongTinLichChieuTheoHeThong: result.data
          },
          () => {
            this.setPhim();
          }
        );
      })
      .catch();
  }
  setPhim = () => {
    if (this.state.thongTinLichChieuTheoHeThong.length > 0) {
      this.state.thongTinLichChieuTheoHeThong.map((item, index) => {
        item.lstCumRap.map((item, index) => {
          if (item.maCumRap === this.props.maCumRap) {
            item.danhSachPhim.map((item, index) => {
              let phim = {
                maPhim: item.maPhim,
                tenPhim: item.tenPhim,
                lstLichChieuTheoPhim: item.lstLichChieuTheoPhim
              };
              this.setState(
                {
                  dsPhim: [...this.state.dsPhim, phim]
                 
                },
                () => {
                  // console.log(this.state);
                }
              );
            });
          }
        });
      });
    } else {
      console.log("null");
    }
  };
  renderDsPhim = () => {
    if (this.state.dsPhim.length > 0) {
      // console.log("ds phim co ton ta");

      return this.state.dsPhim.map((item, stt) => {
        return this.props.listMovie.map((movie, index) => {
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
                  <MovieTime/>
                  {/* <button
                    type="button"
                    className="btn btn-outline-secondary mr-2 mb-2"
                  >
                    14:45
                  </button> */}
                  
                </div>
              </div>
            );
          } else {
            return "";
          }
        });
      });
    } else {
      return <div><span>Không có xuất chiếu</span></div>;
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
