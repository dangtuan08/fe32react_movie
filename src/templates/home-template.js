import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Navbar from "./../Components/Home/Index/Header/Header";

const HomeLayout = props => {
  // console.log(props.children);
  return (
    <Fragment>
      <Navbar />
      {props.children}
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
