import React, { Component } from "react";
import Header from "../../../Components/Home/Index/Header/Header";
import Carousel from "../../../Components/Home/Index/Carousel/carousel";
import HomeTool from "../../../Components/Home/Index/HomeTool/homeTool";
import ListMovie from "../../../Components/Home/Index/ListMovie/ListMovie";

export default class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <Carousel />
        <HomeTool />
        <ListMovie/>
      </>
    );
  }
}
