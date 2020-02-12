import React, { Component } from "react";
import * as actionMovie from "../../../../Store/Actions/Movie";
import * as actionCinema from "../../../../Store/Actions/Cinema";
import { connect } from "react-redux";

class HomeTool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieID: "",
      movieValid: false,
      theaterID: "",
      theaterValid: false
    };
  }

  renderMovie = () => {
    // console.log(this.props.listMovie);
    return this.props.listMovie.map((movie, index) => {
      return (
        <option key={index} value={movie.maPhim}>
          {movie.tenPhim}
        </option>
      );
    });
  };

  //Render các cụm rạp
  renderTheater = () => {
    let { listMovieTheater } = this.props;
    if (this.state.movieValid && listMovieTheater.heThongRapChieu) {
      console.log(listMovieTheater.heThongRapChieu);
      return listMovieTheater.heThongRapChieu.map((heThongRapChieu, index) => {
        // console.log(heThongRapChieu);

        return heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          // console.log(cumRapChieu.tenCumRap);
          return (
            <option key={index} value={cumRapChieu.maCumRap}>
              {cumRapChieu.tenCumRap}
            </option>
          );
        });
      });
    }
  };

  handleOnchange = event => {
    // console.log(event.target.value);

    if (event.target.name === "sel-movie" && this.state.movieValid === false) {
      // console.log(event.target.value);

      this.props.getMovieTheater(event.target.value);
      this.setState(
        {
          movieID: event.target.value,
          movieValid: true
        },
        () => {
          console.log(this.state);
        }
      );
    }
    if (event.target.name === "sel-movie" && this.state.movieValid === true) {
      this.props.getMovieTheater(event.target.value);
      this.setState(
        {
          movieID: event.target.value
        },
        () => {
          console.log(this.state);
        }
      );
    }
    if (event.target.name === "sel-theater") {
      this.setState(
        {
          theaterID: event.target.value,
          theaterValid: true
        },
        () => {
          console.log(this.state);
        }
      );
    }
  };

  // componentDidMount(){
  //   this.props.getMovieTheater(1314)
  // }

  render() {
    return (
      <>
        <section className="homeTools py-5" id="homeTools">
          <div className="container">
            <div className="row homeTools--row ">
              <div className="col-lg-3 col-md-3 homeTools-item">
                <select
                  className="form-control"
                  id="sel-movie"
                  name="sel-movie"
                  onChange={this.handleOnchange}
                >
                  <option disabled selected>
                    Phim
                  </option>
                  {this.renderMovie()}
                </select>
              </div>
              <div className="col-lg-3 col-md-3 homeTools-item">
                <select
                  className="form-control"
                  id="sel-theater"
                  name="sel-theater"
                  onChange={this.handleOnchange}
                >
                  <option selected hidden>
                    Rạp
                  </option>
                  {this.renderTheater()}
                </select>
              </div>
              <div className="col-lg-2 col-md-2 homeTools-item">
                <select
                  className="form-control"
                  id="sel1"
                  name="sellist1"
                  onChange={this.handleOnchange}
                >
                  <option selected disabled>
                    Ngày xem{" "}
                  </option>
                </select>
              </div>
              <div className="col-lg-2 col-md-2 homeTools-item">
                <select className="form-control" id="sel1" name="sellist1">
                  <option value="" selected disabled>
                    Xuất chiếu
                  </option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <div className="col-lg-2 col-md-2 homeTools--btnBuy">
                <button className="btn btn-success text-center btn-buy-ticket">
                  Mua vé
                </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeTool);
