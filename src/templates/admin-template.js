import React, { Fragment } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import NavBar from './../Components/Admin/Index/NavBar'
const AdminLayout = props => {
  return (
    <Fragment>
     <NavBar/>
      {props.children}
    </Fragment>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  console.log(Component,props);
  
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else {
          return <Redirect to="/admin" />;
        }
      }}
    />
  );
}
