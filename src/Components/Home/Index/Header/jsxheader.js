import React, { Component } from 'react'

export default class jsxheader extends Component {
  render() {
    var frm = new FormData();
    frm.append("File",File,tenfile);
    frm.append("tenphim", tenphim);
    frm.append("manhom","GP01");
    return (
      <div>
        
      </div>
    )
  }
}


<header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            <img
              className="img-fluid"
              src="./img/web-logo.png"
              alt="web-logo.png"
            />
          </NavLink>
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
                <a
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#modalLogin"
                  name="login"
                >
                  <i className="fa fa-user pr-2" />
                  Đăng nhập
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#modalSignUp"
                >
                  <i className="fa fa-user pr-2" />
                  Đăng ký
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>