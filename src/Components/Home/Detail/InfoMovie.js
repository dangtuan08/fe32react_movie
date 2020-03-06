import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "../../../../node_modules/react-modal-video/scss/modal-video.scss";

export default class InfoMovie extends Component {
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
  render() {
    // console.log(this.props);
    const getVideoId = require("get-video-id");
    let videoID = getVideoId(this.props.movieInfo.trailer);
    return (
      <section className="container detail-movie">
        <div className="row">
          <div className="col-sm-3 ">
            <div className="detail-movie-img">
              <img
                className="img-fluid w-100 img-movie"
                height={380}
                src={this.props.movieInfo.hinhAnh}
                alt={this.props.movieInfo.biDanh}
              />
              <button
                className="btn-trailer show-hover"
                onClick={this.openModal}
              >
                <img
                  src={require("../../../Assets/img/play-video.png")}
                  alt="play-video"
                />
              </button>
            </div>
          </div>
          <div className="col-sm-5">
            <p>{this.props.movieInfo.ngayKhoiChieu}</p>
            <h2>{this.props.movieInfo.tenPhim}</h2>
            <p>105 phút - 0 IMDb - 2D/Digital</p>
            <a className="btn btn-success" href="#lichChieu">Mua vé</a>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={videoID.id}
          onClose={() => this.setState({ isOpen: false })}
        />
      </section>
    );
  }
}
