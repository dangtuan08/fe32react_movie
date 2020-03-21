import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/quan-ly-phim">
                Quản lý phim
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quan-ly-user">
                Quản lý user
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
