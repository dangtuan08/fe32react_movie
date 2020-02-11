import React, { Component } from "react";

class Movie extends Component {
  renderHTML = () => {
    if (this.props.movie) {
      return (
        <>
          <div className="col-sm-3 py-4">
            <div className="item movie-item">
              <div className="card">
                <div className="movie-img">
                  <a href="#">
                    <img
                      className="card-img-top"
                      src={this.props.movie.hinhAnh}
                      alt="chi-chi-em-em-sister-sister"
                    />
                    <div className="overlay show-hover" />
                  </a>
                  <button
                    className="btn-trailer show-hover"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    <img src="./img/play-video.png" alt="play-video" />
                  </button>
                </div>
                <div className="card-body">
                  <div className="title-movie hidden-hover">
                    <h4 className="card-title">
                    {this.props.movie.tenPhim}
                    </h4>
                  </div>
                  <div className="movie-time hidden-hover">
                    <p className="card-text">108 phút</p>
                  </div>
                  <div className="btn-buy w-100 show-hover">
                    <button className="btn btn-success w-100">Mua vé</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    return <></>;
  };
  render() {
    // let { movie } = this.props;
    // console.log(movie.hinhAnh);
    // console.log(this.props.movie);

    return this.renderHTML();
  }
}

export default Movie;
