import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { bookingService } from "../../../Services/index";

import { css } from "@emotion/core";
// First way to import
import { GridLoader } from "react-spinners";

import ListSeat from "../../../Components/Home/Booking/listSeat";
import BookingInfo from "../../../Components/Home/Booking/bookingInfo";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 200px;
  margin-bottom: 500px;
  z-index: 9900;
`;

const SO_LUONG_GHE_MOT_HANG = 16;
class BookingTix extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      chiTietLichChieu: {}
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    console.log(this.props.history);
    const id = this.props.match.params.id;
    // this.props.getDetailMovie(id);
    bookingService
      .layDanhSachPhongVeAxios(id)
      .then(result => {
        this.setState(
          {
            chiTietLichChieu: result.data,
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

  renderListSeat = () => {
    // console.log(this.state.chiTietLichChieu.danhSachGhe);
    // chia số lượng trong mảng danhsachghe thành các mảng nhỏ với 16 ghế
    let mangHangGhe = this.chiaHangGhe(
      this.state.chiTietLichChieu.danhSachGhe,
      SO_LUONG_GHE_MOT_HANG
    );
    // console.log(mangHangGhe);
    return mangHangGhe.map((listSeat, stt) => {
      return <ListSeat key={stt} stt={stt} listSeat={listSeat} />;
    });
  };

  chiaHangGhe(myArray, soLuong) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += soLuong) {
      let myChunk = myArray.slice(index, index + soLuong);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  render() {

    let { chiTietLichChieu } = this.state;
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
    } else {
      return (
        <section className="booking">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-8 booking-seat">
                <div className="row">
                  <div className="col-9">
                    <p>{chiTietLichChieu.tenCumRap}</p>
                    <p>
                      {`${chiTietLichChieu.thongTinPhim.ngayChieu} - ${chiTietLichChieu.thongTinPhim.gioChieu} -
                      ${chiTietLichChieu.thongTinPhim.tenRap}`}
                    </p>
                  </div>
                  <div className="col-3">
                    <span>Thời gian giữ ghế: 4:00</span>
                  </div>
                  <div className="col-12 screen">
                    <img
                      className="img-fluid w-100"
                      src={require("./../../../Assets/img/screen.png")}
                      alt=""
                    />
                  </div>
                  <div className="col-12 pb-5">
                    {this.renderListSeat()}
                    <div className="row list-seat py-5">
                      <span className="seat mr-1 mb-1"></span>
                      <span className="pr-5">Ghế thường</span>
                      <span className="seat seat-vip mr-1 mb-1" />{" "}
                      <span className="pr-5">Ghế VIP</span>
                      <span
                        className="seat seat-disable mr-1 mb-1"
                        disable="true"
                      />
                      <span className="pr-5">Ghế đã có người mua</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-4 booking-info">
                <BookingInfo chiTietLichChieu={chiTietLichChieu}/>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default withRouter(BookingTix);
