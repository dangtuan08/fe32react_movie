import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../../Store/Actions/Cinema";
import Theater from "./listTheater";
import ListMovieOfTheater from "./listMovieOfTheater";
class Cinemas extends Component {
  renderCinemaLogo() {
    // console.log(this.props.cinemas);
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
                    <Theater maHeThongRap={item.maHeThongRap} />
                  </ul>
                </div>
                <div className="col-sm-7 overflow-400">
                  <div className="tab-content" id="myListCineContent">
                    {this.renderMovieOfTheater(item.maHeThongRap)}
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
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
                    <Theater maHeThongRap={item.maHeThongRap} />
                  </ul>
                </div>

                <div className="col-sm-7 overflow-400">
                  <div className="tab-content" id="myListCineContent">
                    {this.renderMovieOfTheater(item.maHeThongRap)}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
    }
  }

  renderMovieOfTheater(maHeThongRap) {
   
    
    let { listTheater } = this.props;
    console.log(listTheater);
    // console.log(listTheater);
    if (listTheater.length > 0) {
      return listTheater.map((item, index) => {
        // console.log(item.maHeThong);

        if (item.maHeThong === maHeThongRap) {
          return item.listTheater.map((theater, index) => {
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="tab-pane fade show active"
                  id={theater.maCumRap}
                  role="tabpanel"
                  aria-labelledby={theater.maCumRap + "--tab"}
                >
                  <ListMovieOfTheater
                    maHeThongRap={maHeThongRap}
                    maCumRap={theater.maCumRap}
                  />
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="tab-pane fade"
                  id={theater.maCumRap}
                  role="tabpanel"
                  aria-labelledby={theater.maCumRap + "--tab"}
                >
                  <ListMovieOfTheater
                    maHeThongRap={maHeThongRap}
                    maCumRap={theater.maCumRap}
                  />
                </div>
              );
            }
          });
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
    cinemas: state.CinemaReducer.listCinema,
    listTheater: state.CinemaReducer.listTheater
  };
};

const mapDispatchToProps = dispath => {
  return {
    getListCinema: () => {
      dispath(action.actGetListCinemaAPI());
    },
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
