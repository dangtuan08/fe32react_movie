import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <>
        <section className="my-carousel">
          <div
            id="carousel-banner"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval={3000}>
                <img className="img-fluid" src="./img/slide2.jpg" alt="slide2.jpg" />
              </div>
              <div className="carousel-item" data-interval={3000}>
                <img className="img-fluid" src="./img/slide3.jpg" alt="slide3.jpg" />
              </div>
              <div className="carousel-item" data-interval={3000}>
                <img className="img-fluid" src="./img/slide4.jpg" alt="slide4.jpg" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carousel-banner"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-banner"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
      </>
    );
  }
}
