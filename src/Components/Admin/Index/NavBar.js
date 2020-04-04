import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './navBar.scss'
class NavBar extends Component {
  // componentDidMount
  handleSubmit = e => {
    e.preventDefault();
    localStorage.removeItem("UserAdmin");
    this.props.history.push("/admin");
  };
  render() {
    let userAdmin = JSON.parse(localStorage.getItem("UserAdmin"));
    if (userAdmin)
      return (
        // <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        //   <div>
        //     <ul className="navbar-nav">
        //       <li className="nav-item">
        //         <Link className="nav-link" to="/quan-ly-phim">
        //           Quản lý phim
        //         </Link>
        //       </li>
        //       <li className="nav-item">
        //         <Link className="nav-link" to="/quan-ly-user">
        //           Quản lý user
        //         </Link>
        //       </li>
        //     </ul>
        //   </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img
                className="img-fluid"
                src={require("../../../Assets/img/web-logo.png")}
                alt="web-logo.png"
              />
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {/* <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li> */}
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
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={this.handleSubmit}
            >
              <span>Tài khoản: {userAdmin.taiKhoan}</span>
              <button className="btn btn-light my-2 my-sm-0" type="submit">
                Đăng Xuất
              </button>
            </form>
          </div>
        </nav>
      );
  }
}

export default withRouter(NavBar);
