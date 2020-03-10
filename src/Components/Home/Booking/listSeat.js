import React, { Component } from "react";
import Seat from "./seat";

export default class ListSeat extends Component {
  renderGhe = () => {
    let tenDayGhe = String.fromCharCode(65 + this.props.stt);

    return this.props.listSeat.map((seat, index) => {
      return <Seat key={index} seat={seat} stt={index} tenDayGhe={tenDayGhe} />;
    });
  };

  render() {
    let tenDayGhe = String.fromCharCode(65 + this.props.stt);
    console.log(this.props);

    return (
      <div className="row list-seat">
        {/* <span className="seat mr-1 mb-1">{tenDayGhe}</span> */}
        {this.renderGhe()}
        {/* <span className="seat mr-1 mb-1"></span>
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat seat-vip mr-1 mb-1" />
        <span className="seat mr-1 mb-1"></span> */}
      </div>
    );
  }
}
