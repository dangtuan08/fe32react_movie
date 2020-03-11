import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Navbar from "./../Components/Home/Index/Header/Header";
import Footer from "./../Components/Home/Index/Footer/footer";
import ModalLogin from "./../Components/Home/Index/Modal/ModalLogin";
import ModalSignUp from "./../Components/Home/Index/Modal/ModalSignUp";
const HomeLayout = props => {
  // console.log(props.children);
  return (
    <Fragment>
      <Navbar />
      <div className="py-5"></div>
      {props.children}
      <Footer />

      <ModalLogin />
      <ModalSignUp />
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
