import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

const AdminLayout = props => {
  return (
    <Fragment>
      <div>nav admin</div>
      {props.children}
    </Fragment>
  );
};

export default function AdminTemplate({ Component, ...props }) {
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
