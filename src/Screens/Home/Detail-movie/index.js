import React, { Component } from "react";
import InfoMovie from "../../../Components/Home/Detail/InfoMovie";
import { connect } from "react-redux";
import * as actionMovie from "../../../Store/Actions/Movie";
import { movieService } from "../../../Services/index";

import { css } from "@emotion/core";
// First way to import
import { ClipLoader, GridLoader} from "react-spinners";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top:200px;
  margin-bottom:500px;
  z-index:9900;
`;

class DetailMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movieInfo: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    // this.props.getDetailMovie(id);
    movieService
      .getMovieDetailAxios(id)
      .then(result => {
        this.setState(
          {
            movieInfo: result.data,
            loading: false
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="sweet-loading">
          <GridLoader
            css={override}
            size={30}
            //size={"150px"} this also works
            color={"#123abc"}
            loading={this.state.loading}
          />
        </div>
      );
    }
    return (
      <>
        <div>
          {/* thông tin phim */}
          <InfoMovie movieInfo={this.state.movieInfo}/>

          {/* đặt vé */}
          <section className="container booking-tix">
            {/* div hình nên đen */}
            <div className="col-xs-12" id="homeCinemaComplex" />
            <ul className="nav nav-tabs mb-4" id="myTab-movie" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="lichChieu-tab"
                  data-toggle="tab"
                  href="#lichChieu"
                  role="tab"
                  aria-controls="movie"
                  aria-selected="true"
                >
                  Lịch chiếu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="detail-tab"
                  data-toggle="tab"
                  href="#detail"
                  role="tab"
                  aria-controls="trailer"
                  aria-selected="false"
                >
                  Thông tin
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="comment-tab"
                  data-toggle="tab"
                  href="#comment"
                  role="tab"
                  aria-controls="comment"
                  aria-selected="false"
                >
                  Thảo luận
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              {/* tab đặt vé */}
              <div
                className="tab-pane fade show active"
                id="lichChieu"
                role="tabpanel"
                aria-labelledby="movie-tab"
              >
                <section className="homeTools py-5" id="homeTools">
                  <div className="container">
                    <div className="row homeTools--row ">
                      <div className="col-lg-3 col-md-3 homeTools-item">
                        <select
                          className="form-control"
                          id="sel-movie"
                          name="sel-movie"
                        >
                          <option selected>Phim</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                        </select>
                      </div>
                      <div className="col-lg-3 col-md-3 homeTools-item">
                        <select
                          className="form-control"
                          id="sel-cinemas"
                          name="sel-cinemas"
                        >
                          <option selected>Rạp</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                        </select>
                      </div>
                      <div className="col-lg-2 col-md-2 homeTools-item">
                        <select
                          className="form-control"
                          id="sel1"
                          name="sellist1"
                        >
                          <option selected>Ngày xem </option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                        </select>
                      </div>
                      <div className="col-lg-2 col-md-2 homeTools-item">
                        <select
                          className="form-control"
                          id="sel1"
                          name="sellist1"
                        >
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
              </div>
              {/* tab trailer */}
              <div
                className="tab-pane fade text-center"
                id="detail"
                role="tabpanel"
                aria-labelledby="trailer-tab"
              >
                <div className="row detailMainStyle text-left">
                  <div className="col-6 col-xs-12 film left">
                    <div className="row rowLeftInfo">
                      <p className="col-6 contentTitle">Ngày phát hành</p>
                      <p className="col-6 contentInfo">14.02.2020</p>
                    </div>
                    <div className="row rowLeftInfo">
                      <p className="col-6 contentTitle">Đạo diễn</p>
                      <p className="col-6 contentInfo"> Son Jae-gon </p>
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
                      <p className="col-6 contentInfo">Hàn Quốc</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12 film right">
                    <div className="row rowLeftInfo">
                      <p className="col-12 contentTitle">Nội dung</p>
                    </div>
                    <div className="row rowLeftInfo">
                      <p className="col-12 contentInfoFull description ng-binding">
                        Một luật sự tập sự tên Tae-soo (Ahn Jae-hong) được công
                        ty giao nhiệm vụ tiếp quản việc kinh doanh của vườn thú
                        khi gần như tất cả các con thú đã bị bán đi. Một ý tưởng
                        táo bạo đã được đưa ra để cứu vườn thú “thoát ế”: Các
                        nhân viên phải mặc các bộ đồ thú và diễn như những con
                        thú “thứ thiệt”. Mọi chuyện bất ngờ vượt khỏi tầm kiểm
                        soát khi sở thú đột nhiên trở thành hiện tượng trên mạng
                        xã hội. Các nhân viên phải làm gì nếu mọi chuyện vỡ lở?
                      </p>
                    </div>
                    <div className="row rowLeftInfo">
                      <p className="contentInfoFull" />
                    </div>
                  </div>
                </div>
              </div>
              {/* tab thảo luận */}
              <div
                className="tab-pane fade text-center"
                id="comment"
                role="tabpanel"
                aria-labelledby="comment-tab"
              >
                <div
                  className="fb-comments"
                  data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
                  data-width
                  data-numposts={10}
                />
              </div>
            </div>
            <div className="col-xs-12" id="homeCinemaComplex" />
          </section>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispath => {
  return {
    getDetailMovie: id => {
      dispath(actionMovie.actGetDetailMovieAPI(id));
    }
  };
};
export default connect(null, mapDispatchToProps)(DetailMovie);
