import React, { Component } from "react";

export default class DetailMovieTab extends Component {
  render() {
      console.log(this.props.movieInfo);
      let {movieInfo} = this.props;
      let day = new Date(
        movieInfo.ngayKhoiChieu
      ).toLocaleDateString();
    return (
      <div className="row detailMainStyle text-left">
        <div className="col-6 col-xs-12 film left">
          <div className="row rowLeftInfo">
            <p className="col-6 contentTitle">Ngày phát hành</p>
            <p className="col-6 contentInfo">{day}</p>
          </div>
          <div className="row rowLeftInfo">
            <p className="col-6 contentTitle">Đạo diễn</p>
            <p className="col-6 contentInfo"> SonGoKu </p>
          </div>
          <div className="row rowLeftInfo">
            <p className="col-6 contentTitle">Diễn viên</p>
            <p className="col-6 contentInfo" />
          </div>
          <div className="row rowLeftInfo">
            <p className="col-6 contentTitle">Thể Loại</p>
            <p className="col-6 contentInfo">hài hước</p>
          </div>
          <div className="row rowLeftInfo">
            <p className="col-6 contentTitle">Định dạng</p>
            <p className="col-6 contentInfo">2D/Digital</p>
          </div>
          <div className="row rowLeftInfo">
            <p className="col-6 contentTitle">Quốc Gia SX</p>
            <p className="col-6 contentInfo">USA</p>
          </div>
        </div>
        <div className="col-sm-6 col-xs-12 film right">
          <div className="row rowLeftInfo">
            <p className="col-12 contentTitle">Nội dung</p>
          </div>
          <div className="row rowLeftInfo">
            <p className="col-12 contentInfoFull description ng-binding">
             {movieInfo.moTa}
            </p>
          </div>
          <div className="row rowLeftInfo">
            <p className="contentInfoFull" />
          </div>
        </div>
      </div>
    );
  }
}
