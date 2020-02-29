import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../../../Store/Actions/User";
// import logo from './img/web-logo.png'
class Header extends Component {
  
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      
      this.props.setUserLogin(user)
    }
  }
  handleOnclick = event => {
    if (event.target.name === "logout") {
      localStorage.removeItem("user");
      this.props.setUserLogin({});
    }
  };

  renderHTML = () => {
    if (this.props.user.taiKhoan) {
      console.log("user ko rong");

      return (
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
              <img
                className="img-fluid"
                src="./img/web-logo.png"
                // src={logo}
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mr-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Lịch chiếu
                  </NavLink>
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
                <li className="nav-item dropdown pr-5">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>{this.props.user.taiKhoan}</span>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Thông tin tài khoản
                    </a>
                    <a className="dropdown-item" href="#">
                      Đặt vé
                    </a>
                    <div className="dropdown-divider" />
                    <button
                      className="dropdown-item"
                      name="logout"
                      onClick={this.handleOnclick}
                    >
                      Đăng xuất
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      );
    } else {
      return (
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
              <img
                className="img-fluid"
                src={require('../../../../Assets/img/web-logo.png')} 
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mr-auto">
                <li className="nav-item ">
                  <Link className="nav-link"  activeClassName="active" to="/" >
                    Lịch chiếu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" activeClassName="active" to="/#" >
                    Cụm rạp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" activeClassName="active" to="/#" >
                    Tin tức
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" activeClassName="active" to="/#" >
                    Ứng dụng
                  </Link>
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
      );
    }
  };

  render() {
    return this.renderHTML();
  }
}

const mapStateToProps = state => {
  return {
    user: state.UserReducer.user
  };
};

const mapDispatchToProps = dispath => {
  return {
    setUserLogin: user => {
      dispath(action.actSetUserLogin(user));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
