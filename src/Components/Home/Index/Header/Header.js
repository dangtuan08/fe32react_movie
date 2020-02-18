import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionModal from "../../../../Store/Actions/Modal";

class Header extends Component {
  handleOnclick = event => {
    console.log(event.target.name);
    switch (event.target.name) {
      case "login":
        this.props.BtnLoginModalClick(true)
        break;
    
      default:
        break;
    }
  };
  render() {
    return (
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
                  onClick={this.handleOnclick}
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
    );
  }
}

const mapDispatchToProps = dispath => {
  return {
    BtnLoginModalClick: value => {
      dispath(actionModal.actBtnLoginModalClick(value));
    },
    
  };
};
export default connect(null,mapDispatchToProps)(Header);
