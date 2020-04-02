import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../../Store/Actions/Cinema";
import { cinemaService } from "../../../../Services/";
class Theater extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dsCumRap: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    if(this.props.listTheater.length===0){
      this.props.getListTheater(this.props.maHeThongRap);
    }
    
    cinemaService
      .getListTheaterAxios(this.props.maHeThongRap)
      .then(result => {
        this.setState(
          {
            dsCumRap: result.data
          },
          () => {
            // console.log(this.state);
          }
        );
      })
      .catch();
  }
  renderTheater() {
    // console.log(this.state.dsCumRap);
    let { dsCumRap } = this.state;
    if (dsCumRap.length >= 0) {
      return dsCumRap.map((item, index) => {
        if (index === 0) {
          return (
            <li className="nav-item w-100" key={index}>
              <a
                className="nav-link active"
                id={index}
                data-toggle="tab"
                href={"#" + item.maCumRap}
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <div className="cgv-item pt-3 d-flex flex-row ">
                  <img
                    className="cinema-logo pr-2"
                    src="./img/cgv-aeon-binh-tan.jpg"
                    alt="cgv-aeon-binh-tan"
                  />
                  <div className="cinema-info">
                    <p>
                      <span>{item.tenCumRap}</span>
                    </p>
                    <span className="cinema-address">{item.diaChi}</span>
                  </div>
                </div>
              </a>
            </li>
          );
        } else {
          return (
            <li className="nav-item w-100" key={index}>
              <a
                className="nav-link"
                id={index}
                data-toggle="tab"
                href={"#" + item.maCumRap}
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <div className="cgv-item pt-3 d-flex flex-row ">
                  <img
                    className="cinema-logo pr-2"
                    src="./img/cgv-aeon-binh-tan.jpg"
                    alt="cgv-aeon-binh-tan"
                  />
                  <div className="cinema-info">
                    <p>
                      <span>{item.tenCumRap}</span>
                    </p>
                    <span className="cinema-address">{item.diaChi}</span>
                  </div>
                </div>
              </a>
            </li>
          );
        }
      });
    }
  }
  render() {
    return this.renderTheater();
  }
}

const mapStateToProps = state => {
  return {
    listTheater: state.CinemaReducer.listTheater
  };
};
const mapDispatchToProps = dispath => {
  return {
    getListTheater: maHeThongRap => {
      dispath(action.actGetListTheaterAPI(maHeThongRap));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Theater);
