import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MovieTime extends Component {
  render() {
    return (
      <NavLink
        
        className="btn btn-outline-secondary mr-2 mb-2"
        to="/booking-tix/123"
      >
        14:45
      </NavLink>
    );
  }
}
