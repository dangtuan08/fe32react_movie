import React, { Component } from "react";

export default class HomeTool extends Component {
  render() {
    return (
      <>
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
                <select className="form-control" id="sel1" name="sellist1">
                  <option selected>Ngày xem </option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <div className="col-lg-2 col-md-2 homeTools-item">
                <select className="form-control" id="sel1" name="sellist1">
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
      </>
    );
  }
}
