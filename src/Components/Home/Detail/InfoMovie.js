import React, { Component } from 'react'

export default class InfoMovie extends Component {
    render() {
        return (
            <section className="container detail-movie">
            <div className="row">
              <div className="col-sm-3 ">
                <div className="detail-movie-img">
                  <img
                    className="img-fluid w-100"
                    height={300}
                    src="./../img/chi-chi-em-em-sister-sister-c18-15747394235000_215x318.jpg"
                  />
                  <button className="btn-trailer show-hover">
                    <img src="./img/play-video.png" alt="play-video" />
                  </button>
                </div>
              </div>
              <div className="col-sm-5">
                <p>07.02.2020</p>
                <h2>Birds of Prey: Cuộc Lột Xác Huy Hoàng Của Harley Quinn</h2>
                <p>105 phút - 0 IMDb - 2D/Digital</p>
                <button className="btn btn-success">Mua vé</button>
              </div>
            </div>
          </section>
          
        )
    }
}
