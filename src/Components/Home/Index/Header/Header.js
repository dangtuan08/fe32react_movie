import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { connect } from "react-redux";
import * as action from "../../../../Store/Actions/User";
import shortid from "shortid";
import Swal from 'sweetalert2'
// import logo from './img/web-logo.png'
class Header extends Component {
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      this.props.setUserLogin(user);
    }
  }
  getId = () => {
    const id = shortid.generate();
    console.log(id);
    return id;
  };
  handleOnclick = event => {
    if (event.target.name === "logout") {
      localStorage.removeItem("user");
      this.props.setUserLogin({});
      Swal.fire({
        icon: "success",
        title: "Đã đăng xuất",
        text: ""
      });
    }
  };

  renderHTML = () => {
    if (this.props.user.taiKhoan) {
      // console.log("user ko rong");

      return (
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
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Thông tin tài khoản
              </a>
              <Link className="dropdown-item" to="/chi-tiet-tai-khoan">
                Đặt vé
              </Link>
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
      );
    } else {
      return (
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
      );
    }
  };

  render() {
    return (
      <header className="header" key={this.getId()}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            <img
              className="img-fluid"
              src={require("../../../../Assets/img/web-logo.png")}
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
              <li className="nav-item ">
                <Link className="nav-link" to="/#homeTools">
                  Lịch chiếu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#cinema">
                  Cụm rạp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#">
                  Tin tức
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#">
                  Ứng dụng
                </Link>
              </li>
            </ul>
            {this.renderHTML()}
          </div>
        </nav>
      </header>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
