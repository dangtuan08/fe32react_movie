import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <>
      <section className="my-carousel">
        <div className="owl-carousel owl-theme carousel-banner">
          <div className="item">
            <img src="./img/slide2.jpg" alt="slide2" width="100%"/>
          </div>
          {/* <div className="item">
            <img src="./img/slide3.jpg" alt="slide2" />
          </div>
          <div className="item">
            <img src="./img/slide4.jpg" alt="slide2" />
          </div>
          <div className="item">
            <img src="./img/slide2.jpg" alt="slide2" />
          </div> */}
        </div>
      </section>
      
      </>
      
    );
  }
}
