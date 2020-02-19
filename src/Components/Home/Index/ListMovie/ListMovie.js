import React, { Component } from "react";
import Movie from "../Movie/Movie";
import { connect } from "react-redux";
import * as action from "../../../../Store/Actions/Movie";

class ListMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soPhanTu: 4,
    };
  }

  componentDidMount() {
    this.props.getListMoviePage(this.state.soPhanTu);
    // console.log(this.state);
    
  }

  renderHTML = () => {
    let { listMoviePage } = this.props;
    if (listMoviePage.items) {
      return listMoviePage.items.map((item, index) => {
        return <Movie key={index} movie={item} />;
      });
    }
    // console.log(listMoviePage);
  };

  handleOnClick = () => {
    if (this.state.soPhanTu <= this.props.listMoviePage.totalCount) {
      this.setState(
        {
          soPhanTu: this.state.soPhanTu + 4
        },
        () => {
          // console.log(this.state);
          this.props.getListMoviePage(this.state.soPhanTu);
        }
      );
    }
  };

  render() {
    // console.log("render");
    // console.log(this.props.listMoviePage.items);
    
    return (
      <>
        <section className="movies">
          <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="movie-tab"
                  data-toggle="tab"
                  href="#movie"
                  role="tab"
                  aria-controls="movie"
                  aria-selected="true"
                >
                  ĐANG CHIẾU
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  SẮP CHIẾU
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              {/* tab movie */}
              <div
                className="tab-pane fade show active"
                id="movie"
                role="tabpanel"
                aria-labelledby="movie-tab"
              >
                <div className="row">{this.renderHTML()}</div>
                <div className="col-sm-12 text-center">
                  {this.state.soPhanTu <= this.props.listMoviePage.totalCount ? <button className="btn btn-info" onClick={this.handleOnClick}>
                    Xem thêm
                  </button> : "" }
                </div>
              </div>
              {/* tab sắp chiếu */}
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <Movie />
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
    // listMovie: state.MovieReducer.listMovie
    listMoviePage: state.MovieReducer.listMoviePage
  };
};

const mapDispatchToProps = dispath => {
  return {
    getListMoviePage: soPhanTu => {
      dispath(action.actGetListMoviePageAPI(soPhanTu));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
