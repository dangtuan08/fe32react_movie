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
    let { listTheater } = this.props;
    // console.log(listTheater.length);
    if (listTheater.length > 1 && this.state.movieValid) {
      return listTheater.map((item, index) => {
        return item.map((theater, index) => {
          return (
            <option key={index} value={theater.maCumRap}>
              {theater.tenCumRap}
            </option>
          );
        });
      });
    } else {
      return (
        <option value={-1} disabled>
          Vui lòng chọn phim
        </option>
      );
    }
  };

  renderMovieTheater = () => {
    if (
      this.state.movieValid &&
      this.state.theaterValid &&
      this.props.listMovieTheater !== ""
    ) {
      console.log("rendermovi");
    }
  };

  handleOnchange = event => {
    console.log(event.target.value);

    if (event.target.name === "sel-movie" && this.state.movieValid === false) {
      console.log(event.target.value);
      this.props.listCinema.map((item, index) => {
        return this.props.getListTheater(item.maHeThongRap);
      });
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
      this.setState(
        {
          movieID: event.target.value
        },
        () => {
          console.log(this.state);
        }
      );
    }
    if (
      event.target.name === "sel-theater"
    ) {
      this.setState({
        theaterID: event.target.value,
        theaterValid: true
      });
      this.props.getMovieTheater(this.state.movieID);
    }
  };

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
                  <option selected disabled>
                    Rạp
                  </option>
                  {this.renderTheater()}
                </select>
              </div>
              <div className="col-lg-2 col-md-2 homeTools-item">
                <select className="form-control" id="sel1" name="sellist1">
                  <option selected disabled>
                    Ngày xem{" "}
                  </option>
                  {this.renderMovieTheater()}
                </select>
              </div>
              <div className="col-lg-2 col-md-2 homeTools-item">
                <select className="form-control" id="sel1" name="sellist1">
                  <option selected>Xuất chiếu</option>
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
    listCinema: state.CinemaReducer.listCinema,
    listTheater: state.CinemaReducer.listTheater,
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
