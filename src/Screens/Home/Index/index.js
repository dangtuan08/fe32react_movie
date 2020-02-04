import React, { Component } from "react";
import Header from "../../../Components/Home/Index/Header/Header";
import Carousel from "../../../Components/Home/Carousel/carousel";

export default class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <Carousel />
      </>
    );
  }
}
