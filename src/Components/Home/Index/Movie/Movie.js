import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "../../../../../node_modules/react-modal-video/scss/modal-video.scss";
class Movie extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  renderHTML = () => {
    if (this.props.movie) {
      // console.log(this.props.movie.trailer);
      
      const getVideoId = require("get-video-id");
      let videoID = getVideoId(this.props.movie.trailer);
      // console.log(videoID.id);
      
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
                    onClick={this.openModal}
                  >
                    <img src="./img/play-video.png" alt="play-video" />
                  </button>
                </div>
                <div className="card-body">
                  <div className="title-movie hidden-hover">
                    <h4 className="card-title">{this.props.movie.tenPhim}</h4>
                  </div>
                  <div className="movie-time hidden-hover">
                    <p className="card-text">108 phút</p>
                  </div>
                  <div className="btn-buy w-100 show-hover">
                    <NavLink
                      className="btn btn-success w-100"
                      to={`/detail-movie/${this.props.movie.maPhim}`}
                    >
                      Mua vé
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={videoID.id}
            onClose={() => this.setState({ isOpen: false })}
          />
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
