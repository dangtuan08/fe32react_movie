import React, { Component } from "react";
import Header from "../../../Components/Home/Index/Header/Header";
import Carousel from "../../../Components/Home/Index/Carousel/carousel";
import HomeTool from "../../../Components/Home/Index/HomeTool/homeTool";
import ListMovie from "../../../Components/Home/Index/ListMovie/ListMovie";
import * as actionMovie from "../../../Store/Actions/Movie";
import * as actionCinema from '../../../Store/Actions/Cinema'
import { connect } from "react-redux";
import ModalLogin from "../../../Components/Home/Index/Modal/ModalLogin";
import ModalSignUp from "../../../Components/Home/Index/Modal/ModalSignUp";
import Cinemas from "../../../Components/Home/Index/Cinemas/cinemas";
import Login from "../../../HOC/Login";
import WithModal from "../../../HOC/with_modal";


// const ModalLogin = WithModal(Login);

class Index extends Component {
  componentDidMount(){
    this.props.getListMovie();
    this.props.getListCinema()
  }

  render() {
    return (
      <>
        {/* {/* <Carousel /> */}
        <HomeTool /> */}
        <ListMovie/>
        <Cinemas/>
        {/* {this.props.btnLoginClick?<ModalLogin/>:""} */}
        {/* <ModalLogin/>
        <ModalSignUp/> */}
      
      </>
    );
  }
  
}

// const mapStateToProps = state => {
//   return {
//     btnLoginClick: state.ModalReducer.btnLoginClick,
//     btnSignUpClick: state.ModalReducer.btnSignUpClick
//   };
// };

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
