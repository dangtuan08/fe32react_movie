import React, { Component } from "react";
import Movie from "../Movie/Movie";
import { connect } from "react-redux";
import * as action from "../../../../Store/Actions/Movie";

class ListMovie extends Component {
  componentDidMount() {
    this.props.getListMovie();
  }

  renderHTML = () => {
    let { listMovie } = this.props;
    return listMovie.map((item, index) => {
      return <Movie key={index} movie={item} />;
    });
  };

  render() {
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
                <div className="tab-movie-content owl-carousel owl-theme">
                  {this.renderHTML()}
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
    listMovie: state.MovieReducer.listMovie
  };
};

const mapDispatchToProps = dispath => {
  return {
    getListMovie: () => {
      dispath(action.actGetListMovieAPI());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
