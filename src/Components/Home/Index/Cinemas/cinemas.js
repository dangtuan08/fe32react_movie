import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../../Store/Actions/Cinema";
import Theater from "./listTheater";

class Cinemas extends Component {
  renderCinemaLogo() {
    console.log(this.props.cinemas);

    if (this.props.cinemas) {
      return this.props.cinemas.map((item, index) => {
        if (index === 0) {
          return (
            <li className="nav-item" key={index}>
              <a
                className="nav-link active"
                id="cgv-tab"
                data-toggle="tab"
                href={"#" + item.maHeThongRap}
                role="tab"
                aria-controls="cgv"
                aria-selected="true"
              >
                <img
                  className="rounded-circle"
                  src={item.logo}
                  alt={item.biDanh}
                />
              </a>
            </li>
          );
        }
        return (
          <li className="nav-item" key={index}>
            <a
              className="nav-link"
              id="cgv-tab"
              data-toggle="tab"
              href={"#" + item.maHeThongRap}
              role="tab"
              aria-controls="cgv"
              aria-selected="true"
            >
              <img
                className="rounded-circle"
                src={item.logo}
                alt={item.biDanh}
              />
            </a>
          </li>
        );
      });
    }
  }

  renderTabTheater() {
    if (this.props.cinemas) {
      return this.props.cinemas.map((item, index) => {
        if (index === 0) {
          return (
            <div
              key={index}
              className="tab-pane fade show active"
              id={item.maHeThongRap}
              role="tabpanel"
              aria-labelledby={item.maHeThongRap}
            >
              <div className="row">
                <div className="col-sm-5 overflow-400 listTheaters">
                  <ul className="nav nav-tabs" id="ListCine" role="tablist">
                  <Theater maHeThongRap={item.maHeThongRap}/>
                  </ul>
                </div>
                <div className="col-sm-7 overflow-400">
                  <div className="tab-content" id="myListCineContent">
                    <div
                      className="tab-pane fade show active"
                      id="cgvNguyenXi"
                      role="tabpanel"
                      aria-labelledby="cgvNguyenXi--tab"
                    >
                      <div className="wrapMovie">
                        <div
                          className="movie-info  d-flex flex-row pt-3"
                          data-toggle="collapse"
                          data-target="#demo"
                        >
                          <img
                            className="pr-2"
                            src="./img/tro-choi-ky-ao.jpg"
                            alt="tro-choi-ky-ao.jpg"
                          />
                          <div className="wrapInfo">
                            <p>
                              <span className="ageType">C13</span>
                              <span className="movieTitle">
                                Trò Chơi Kỳ Ảo: Thăng Cấp - Jumanji: The Next
                                Level
                              </span>
                            </p>
                            <p className="movie-total-time">
                              123 phút - TIX 8.3 - IMDb 0
                            </p>
                          </div>
                        </div>
                        <div id="demo" className="listTime pt-2 collapse show">
                          <p className="s-version">2D Digital</p>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            14:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            18:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            20:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            24:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            14:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            18:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            20:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            24:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            14:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            18:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            20:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            24:45
                          </button>
                        </div>
                        <div
                          className="movie-info  d-flex flex-row pt-3"
                          data-toggle="collapse"
                          data-target="#demo1"
                        >
                          <img
                            className="pr-2"
                            src="./img/tro-choi-ky-ao.jpg"
                            alt="tro-choi-ky-ao.jpg"
                          />
                          <div className="wrapInfo">
                            <p>
                              <span className="ageType">C13</span>
                              <span className="movieTitle">
                                Trò Chơi Kỳ Ảo: Thăng Cấp - Jumanji: The Next
                                Level
                              </span>
                            </p>
                            <p className="movie-total-time">
                              123 phút - TIX 8.3 - IMDb 0
                            </p>
                          </div>
                        </div>
                        <div id="demo1" className="listTime pt-2 collapse show">
                          <p className="s-version">2D Digital</p>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            14:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            18:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            20:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            24:45
                          </button>
                        </div>
                        {/* test */}
                        <div
                          className="movie-info  d-flex flex-row pt-3"
                          data-toggle="collapse"
                          data-target="#demo1"
                        >
                          <img
                            className="pr-2"
                            src="./img/tro-choi-ky-ao.jpg"
                            alt="tro-choi-ky-ao.jpg"
                          />
                          <div className="wrapInfo">
                            <p>
                              <span className="ageType">C13</span>
                              <span className="movieTitle">
                                Trò Chơi Kỳ Ảo: Thăng Cấp - Jumanji: The Next
                                Level
                              </span>
                            </p>
                            <p className="movie-total-time">
                              123 phút - TIX 8.3 - IMDb 0
                            </p>
                          </div>
                        </div>
                        <div id="demo1" className="listTime pt-2 collapse show">
                          <p className="s-version">2D Digital</p>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            14:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            18:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            20:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            24:45
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else{
          return (
            <div
              key={index}
              className="tab-pane fade show"
              id={item.maHeThongRap}
              role="tabpanel"
              aria-labelledby={item.maHeThongRap}
            >
              <div className="row">
                <div className="col-sm-5 overflow-400 listTheaters">
                  <ul className="nav nav-tabs" id="ListCine" role="tablist">
                    <Theater maHeThongRap={item.maHeThongRap}/>
                  </ul>
                </div>
                <div className="col-sm-7 overflow-400">
                  <div className="tab-content" id="myListCineContent">
                    <div
                      className="tab-pane fade show active"
                      id="cgvNguyenXi"
                      role="tabpanel"
                      aria-labelledby="cgvNguyenXi--tab"
                    >
                      <div className="wrapMovie">
                        <div
                          className="movie-info  d-flex flex-row pt-3"
                          data-toggle="collapse"
                          data-target="#demo"
                        >
                          <img
                            className="pr-2"
                            src="./img/tro-choi-ky-ao.jpg"
                            alt="tro-choi-ky-ao.jpg"
                          />
                          <div className="wrapInfo">
                            <p>
                              <span className="ageType">C13</span>
                              <span className="movieTitle">
                                Trò Chơi Kỳ Ảo: Thăng Cấp - Jumanji: The Next
                                Level
                              </span>
                            </p>
                            <p className="movie-total-time">
                              123 phút - TIX 8.3 - IMDb 0
                            </p>
                          </div>
                        </div>
                        <div id="demo" className="listTime pt-2 collapse show">
                          <p className="s-version">2D Digital</p>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            14:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            18:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            20:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            24:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            14:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            18:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            20:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            24:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            14:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            18:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            20:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            24:45
                          </button>
                        </div>
                        <div
                          className="movie-info  d-flex flex-row pt-3"
                          data-toggle="collapse"
                          data-target="#demo1"
                        >
                          <img
                            className="pr-2"
                            src="./img/tro-choi-ky-ao.jpg"
                            alt="tro-choi-ky-ao.jpg"
                          />
                          <div className="wrapInfo">
                            <p>
                              <span className="ageType">C13</span>
                              <span className="movieTitle">
                                Trò Chơi Kỳ Ảo: Thăng Cấp - Jumanji: The Next
                                Level
                              </span>
                            </p>
                            <p className="movie-total-time">
                              123 phút - TIX 8.3 - IMDb 0
                            </p>
                          </div>
                        </div>
                        <div id="demo1" className="listTime pt-2 collapse show">
                          <p className="s-version">2D Digital</p>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            14:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            18:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            20:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            24:45
                          </button>
                        </div>
                        {/* test */}
                        <div
                          className="movie-info  d-flex flex-row pt-3"
                          data-toggle="collapse"
                          data-target="#demo1"
                        >
                          <img
                            className="pr-2"
                            src="./img/tro-choi-ky-ao.jpg"
                            alt="tro-choi-ky-ao.jpg"
                          />
                          <div className="wrapInfo">
                            <p>
                              <span className="ageType">C13</span>
                              <span className="movieTitle">
                                Trò Chơi Kỳ Ảo: Thăng Cấp - Jumanji: The Next
                                Level
                              </span>
                            </p>
                            <p className="movie-total-time">
                              123 phút - TIX 8.3 - IMDb 0
                            </p>
                          </div>
                        </div>
                        <div id="demo1" className="listTime pt-2 collapse show">
                          <p className="s-version">2D Digital</p>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            14:45
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            18:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            20:30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            24:45
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
          
      });
    }
  }

  render() {
    return (
      <section className="cinema">
        <div className="col-xs-12" id="homeCinemaComplex" />
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12">
              <ul className="nav nav-tabs" id="cinemaTab" role="tablist">
                {this.renderCinemaLogo()}
              </ul>
            </div>
            <div className="col-sm-12">
              <div className="tab-content" id="myCinemaTabContent">
                {this.renderTabTheater()}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12" id="homeCinemaComplex" />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    cinemas: state.CinemaReducer.listCinema
  };
};

const mapDispatchToProps = dispath => {
  return {
    getListCinema: () => {
      dispath(action.actGetListCinemaAPI());
    },
    getListTheater: maHeThongRap => {
      dispath(action.actGetListTheaterAPI(maHeThongRap));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
