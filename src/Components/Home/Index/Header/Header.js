import React, { Component } from "react";
import "./_header.scss"

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              className="img-fluid"
              src="./img/web-logo.png"
              alt="web-logo.png"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#homeTools">
                  Lịch chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cụm rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tin tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ứng dụng
                </a>
              </li>
            </ul>
            <ul className="navbar-nav my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-user pr-2" />
                  Đăng nhập
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
