import React, { Component } from "react";
import Header from "../../../Components/Home/Index/Header/Header";
import Carousel from "../../../Components/Home/Index/Carousel/carousel";
import HomeTool from "../../../Components/Home/Index/HomeTool/homeTool";
import ListMovie from "../../../Components/Home/Index/ListMovie/ListMovie";
import * as actionMovie from "../../../Store/Actions/Movie";
import * as actionCinema from '../../../Store/Actions/Cinema'
import { connect } from "react-redux";


class Index extends Component {
  componentDidMount(){
    this.props.getListMovie();
    this.props.getListCinema()
  }
  render() {
    return (
      <>
        {/* <Header /> */}
        <Carousel />
        <HomeTool />
        {/* <ListMovie/> */}
      </>
    );
  }
  
}
const mapDispatchToProps = dispath => {
  return {
    getListMovie: () => {
      dispath(actionMovie.actGetListMovieAPI());
    },
    getListCinema:()=>{
      dispath(actionCinema.actGetListCinemaAPI())
    }
  };
};
export default connect(null,mapDispatchToProps)(Index)
